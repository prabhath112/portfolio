import { Component, inject } from '@angular/core';
import { ConsentService } from '../../core/consent.service';

@Component({
  selector: 'app-consent-banner',
  imports: [],
  templateUrl: './consent-banner.html',
  styleUrl: './consent-banner.scss',
})
export class ConsentBanner {
  readonly consent = inject(ConsentService);
}
