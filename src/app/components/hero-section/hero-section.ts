import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Represents the hero section of the homepage.
 * This component typically serves as the main introduction or banner on the site.
 */
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.scss', './hero-section-responsive.scss']
})
export class HeroSection {

}