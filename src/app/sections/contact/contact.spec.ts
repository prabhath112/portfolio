import { TestBed } from '@angular/core/testing';
import { Contact } from './contact';
import { contactForm } from '../../../content/contact-form';

describe('Contact', () => {
  const original = { ...contactForm };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();
  });

  afterEach(() => {
    Object.assign(contactForm, original);
    vi.restoreAllMocks();
  });

  function render() {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    return { fixture, el: fixture.nativeElement as HTMLElement };
  }

  function submit(component: Contact, el: HTMLElement) {
    const form = el.querySelector('form') as HTMLFormElement;
    return component.send({ preventDefault: () => undefined, target: form } as unknown as SubmitEvent);
  }

  function fill(el: HTMLElement, values: Record<string, string>) {
    for (const [name, value] of Object.entries(values)) {
      (el.querySelector(`[name="${name}"]`) as HTMLInputElement).value = value;
    }
  }

  it('renders LinkedIn, GitHub, and resume links', () => {
    const { el } = render();
    expect(el.querySelectorAll('.contact__list li').length).toBe(3);
  });

  it('hides the form when the build did not configure it', () => {
    const { el } = render();
    expect(el.querySelector('.contact__form')).toBeNull();
  });

  it('sends the message to Supabase and confirms', async () => {
    Object.assign(contactForm, { url: 'https://abc.supabase.co', key: 'sb_publishable_test' });
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 201 }));
    const { fixture, el } = render();
    fill(el, { name: 'Ada', email: 'ada@example.com', message: 'Hello' });
    await submit(fixture.componentInstance, el);
    const [url, init] = fetchSpy.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('https://abc.supabase.co/rest/v1/contact_messages');
    expect((init.headers as Record<string, string>)['apikey']).toBe('sb_publishable_test');
    expect(JSON.parse(String(init.body))).toMatchObject({ name: 'Ada', email: 'ada@example.com', message: 'Hello' });
    expect(fixture.componentInstance.sendState()).toBe('sent');
  });

  it('never sends when the honeypot is filled', async () => {
    Object.assign(contactForm, { url: 'https://abc.supabase.co', key: 'sb_publishable_test' });
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const { fixture, el } = render();
    fill(el, { name: 'Bot', email: 'bot@example.com', message: 'spam', website: 'http://spam' });
    await submit(fixture.componentInstance, el);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('shows an error when sending fails', async () => {
    Object.assign(contactForm, { url: 'https://abc.supabase.co', key: 'sb_publishable_test' });
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 400 }));
    const { fixture, el } = render();
    fill(el, { name: 'Ada', email: 'ada@example.com', message: 'Hello' });
    await submit(fixture.componentInstance, el);
    expect(fixture.componentInstance.sendState()).toBe('error');
  });
});
