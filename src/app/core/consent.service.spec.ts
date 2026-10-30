import { TestBed } from '@angular/core/testing';
import { ConsentService } from './consent.service';

describe('ConsentService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.getElementById('ga-script')?.remove();
    TestBed.configureTestingModule({});
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

  it('loads analytics only after accepting, and remembers the choice', () => {
    const service = TestBed.inject(ConsentService);
    service.accept();
    expect(service.choice()).toBe('granted');
    expect(localStorage.getItem('portfolio-analytics-consent')).toBe('granted');
    expect(document.getElementById('ga-script')?.getAttribute('src')).toContain('googletagmanager.com/gtag/js');
  });
});
