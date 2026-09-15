import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../../../content/profile';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly profile = profile;
}
