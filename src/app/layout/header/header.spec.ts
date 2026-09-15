import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';

describe('Header', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('starts with the mobile menu closed', () => {
    const fixture = TestBed.createComponent(Header);
    expect(fixture.componentInstance.menuOpen()).toBe(false);
  });

  it('toggles the mobile menu open and closed', () => {
    const fixture = TestBed.createComponent(Header);
    const header = fixture.componentInstance;
    header.toggleMenu();
    expect(header.menuOpen()).toBe(true);
    header.closeMenu();
    expect(header.menuOpen()).toBe(false);
  });
});
