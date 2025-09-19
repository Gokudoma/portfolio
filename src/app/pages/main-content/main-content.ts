import { Component } from '@angular/core';
import { HeroSection } from '../../components/hero-section/hero-section';
import { AboutMe } from '../../components/about-me/about-me';
import { MySkills } from '../../components/my-skills/my-skills';
import { Portfolio } from '../../components/portfolio/portfolio';
import { Contact } from '../../components/contact/contact';

/**
 * Represents the main content container of the application.
 * This component aggregates several other components to form the primary layout of the page,
 * including the hero section, about me, skills, portfolio, and contact sections.
 */
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeroSection,
    AboutMe,
    MySkills,
    Portfolio,
    Contact
  ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
  host: {
    '[class.main-content-host]': 'true'
  }
})
export class MainContentComponent {

}
