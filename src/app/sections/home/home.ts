import { Component } from '@angular/core';
import { profile } from '../../../content/profile';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly profile = profile;
}
