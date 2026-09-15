import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('toggles between light and dark', () => {
    const initial = service.theme();
    service.toggle();
    expect(service.theme()).not.toBe(initial);
  });

  it('persists the chosen theme to localStorage', () => {
    service.setTheme('dark');
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });
});
