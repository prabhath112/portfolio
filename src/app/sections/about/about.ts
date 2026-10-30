import { Component, computed, signal } from '@angular/core';
import { profile } from '../../../content/profile';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly profile = profile;

  /** Selected skill group label, or null for all groups. */
  readonly filter = signal<string | null>(null);

  readonly visibleSkills = computed(() => {
    const label = this.filter();
    const groups = label
      ? profile.skillGroups.filter((g) => g.label === label)
      : profile.skillGroups;
    return groups.flatMap((g) => g.items);
  });

  setFilter(label: string | null): void {
    this.filter.set(label);
  }
}
