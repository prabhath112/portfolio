import { Component } from '@angular/core';
import { profile } from '../../../content/profile';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly links = profile.links;
  readonly year = new Date().getFullYear();
}
