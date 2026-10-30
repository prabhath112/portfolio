import { Component, inject } from '@angular/core';
import { ConsentService } from '../../core/consent.service';
import { profile } from '../../../content/profile';

@Component({
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {
  readonly consent = inject(ConsentService);
  readonly email = profile.links.email;
}
