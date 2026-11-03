import { TestBed } from '@angular/core/testing';
import { analytics } from '../../content/analytics';
import { hosting } from '../../content/hosting';
import { ConsentService } from './consent.service';

describe('ConsentService', () => {
  const originalId = analytics.measurementId;

  beforeEach(() => {
    localStorage.clear();
    document.getElementById('ga-script')?.remove();
    analytics.measurementId = 'G-TEST123';
    TestBed.configureTestingModule({});
  });

  afterEach(() => {
    analytics.measurementId = originalId;
  });

  it('is disabled when no measurement ID is configured', () => {
    analytics.measurementId = '';
    const service = TestBed.inject(ConsentService);
    expect(service.enabled).toBe(false);
  });

  it('loads nothing before the visitor chooses', () => {
    const service = TestBed.inject(ConsentService);
    expect(service.enabled).toBe(true);
    expect(service.choice()).toBeNull();
    expect(document.getElementById('ga-script')).toBeNull();
  });

  it('does not load analytics when declined', () => {
    const service = TestBed.inject(ConsentService);
    service.decline();
    expect(service.choice()).toBe('denied');
    expect(document.getElementById('ga-script')).toBeNull();
  });

  it('loads Vercel analytics only on the Vercel build and only after accepting', () => {
    hosting.vercel = true;
    try {
      const service = TestBed.inject(ConsentService);
      expect(document.getElementById('vercel-insights')).toBeNull();
      service.accept();
      expect(document.getElementById('vercel-insights')?.getAttribute('src')).toBe('/_vercel/insights/script.js');
      expect(document.getElementById('vercel-speed-insights')?.getAttribute('src')).toBe('/_vercel/speed-insights/script.js');
    } finally {
      hosting.vercel = false;
      document.getElementById('vercel-insights')?.remove();
      document.getElementById('vercel-speed-insights')?.remove();
    }
  });

  it('never loads Vercel analytics on other hosts', () => {
    const service = TestBed.inject(ConsentService);
    service.accept();
    expect(document.getElementById('vercel-insights')).toBeNull();
  });

  it('loads analytics only after accepting, and remembers the choice', () => {
    const service = TestBed.inject(ConsentService);
    service.accept();
    expect(service.choice()).toBe('granted');
    expect(localStorage.getItem('portfolio-analytics-consent')).toBe('granted');
    expect(document.getElementById('ga-script')?.getAttribute('src')).toContain('G-TEST123');
  });
});
