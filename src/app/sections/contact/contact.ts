import { Component, signal } from '@angular/core';
import { profile } from '../../../content/profile';
import { contactForm } from '../../../content/contact-form';

export type SendState = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly links = profile.links;
  readonly copied = signal(false);
  /** The form is shown only when the build injected the Supabase config. */
  readonly formEnabled = contactForm.url !== '' && contactForm.key !== '';
  readonly sendState = signal<SendState>('idle');

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.links.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Clipboard unavailable: the mailto link above still works.
    }
  }

  async send(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const field = (name: string) => String(data.get(name) ?? '').trim();

    // Honeypot: people never see or fill this field; bots usually do. Pretend success.
    if (field('website') !== '') {
      form.reset();
      this.sendState.set('sent');
      return;
    }

    this.sendState.set('sending');
    try {
      const response = await fetch(`${contactForm.url}/rest/v1/contact_messages`, {
        method: 'POST',
        headers: {
          apikey: contactForm.key,
          Authorization: `Bearer ${contactForm.key}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          name: field('name'),
          email: field('email'),
          message: field('message'),
          source: location.hostname.slice(0, 100),
        }),
      });
      if (!response.ok) {
        throw new Error(`status ${response.status}`);
      }
      form.reset();
      this.sendState.set('sent');
    } catch {
      this.sendState.set('error');
    }
  }
}
