import { Component } from '@angular/core';
import { ProjectCard } from '../../shared/project-card/project-card';
import { projects } from '../../../content/projects';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects = projects;
}
