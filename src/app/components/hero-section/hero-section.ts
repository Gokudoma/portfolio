import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.scss', './hero-section-responsive.scss']
})
export class HeroSection {

}