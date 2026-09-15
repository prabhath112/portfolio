import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('creates the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the header, all sections, and the footer', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('app-home')).toBeTruthy();
    expect(compiled.querySelector('app-about')).toBeTruthy();
    expect(compiled.querySelector('app-experience')).toBeTruthy();
    expect(compiled.querySelector('app-projects')).toBeTruthy();
    expect(compiled.querySelector('app-contact')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });
});
