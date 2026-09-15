import { TestBed } from '@angular/core/testing';
import { Contact } from './contact';

describe('Contact', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();
  });

  it('renders email, LinkedIn, and GitHub links', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.contact__list li').length).toBe(3);
  });
});
