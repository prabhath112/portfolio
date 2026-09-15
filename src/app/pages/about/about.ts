import { Component } from '@angular/core';
import { profile } from '../../../content/profile';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly profile = profile;
}
