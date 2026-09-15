import { Component, input } from '@angular/core';
import { ProjectEntry } from '../../../content/projects';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<ProjectEntry>();
}
