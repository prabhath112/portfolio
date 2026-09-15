import { TestBed } from '@angular/core/testing';
import { Experience } from './experience';

describe('Experience', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience],
    }).compileComponents();
  });

  it('renders at least one timeline entry', () => {
    const fixture = TestBed.createComponent(Experience);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.timeline__entry').length).toBeGreaterThan(0);
  });
});
