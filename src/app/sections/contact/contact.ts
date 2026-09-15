import { Component } from '@angular/core';
import { profile } from '../../../content/profile';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly links = profile.links;
}
