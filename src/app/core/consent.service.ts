import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { analytics } from '../../content/analytics';

export type ConsentChoice = 'granted' | 'denied';

const STORAGE_KEY = 'portfolio-analytics-consent';

@Injectable({ providedIn: 'root' })
export class ConsentService {
  private readonly platformId = inject(PLATFORM_ID);

  /** True only when a Google Analytics measurement ID is configured. */
  readonly enabled = analytics.measurementId !== '';
  readonly choice = signal<ConsentChoice | null>(null);

  constructor() {
    if (!this.enabled || !isPlatformBrowser(this.platformId)) {
      return;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'granted' || stored === 'denied') {
      this.choice.set(stored);
      if (stored === 'granted') {
        this.loadAnalytics();
      }
    }
  }

  accept(): void {
    this.store('granted');
    this.loadAnalytics();
  }

  decline(): void {
    this.store('denied');
  }

  /** Forget the stored choice so the banner is shown again. Analytics stop on the next page load. */
  reset(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(STORAGE_KEY);
    }
    this.choice.set(null);
  }

  private store(choice: ConsentChoice): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, choice);
    }
    this.choice.set(choice);
  }

  private loadAnalytics(): void {
    if (document.getElementById('ga-script')) {
      return;
    }
    const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
    w.dataLayer = w.dataLayer ?? [];
    // gtag.js expects the `arguments` object itself on the data layer, not an array.
    w.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer?.push(arguments);
    };
    w.gtag('js', new Date());
    w.gtag('config', analytics.measurementId);

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analytics.measurementId)}`;
    document.head.appendChild(script);
  }
}
