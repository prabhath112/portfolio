import { Component } from '@angular/core';
import { experience } from '../../../content/experience';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly experience = experience;
}
