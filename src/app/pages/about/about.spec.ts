import { TestBed } from '@angular/core/testing';
import { About } from './about';

describe('About', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();
  });

  it('lists education entries', () => {
    const fixture = TestBed.createComponent(About);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.about__education li').length).toBeGreaterThan(0);
  });
});
