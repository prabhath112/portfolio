import { Component, afterNextRender, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly themeService = inject(ThemeService);
  readonly menuOpen = signal(false);
  readonly active = signal('');

  constructor() {
    afterNextRender(() => {
      const sections = ['about', 'experience', 'projects', 'contact']
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.active.set(entry.target.id);
            }
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      sections.forEach((el) => observer.observe(el));
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
