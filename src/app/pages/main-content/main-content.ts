import { Component } from '@angular/core';
import { HeroSection } from '../../components/hero-section/hero-section';
import { AboutMe } from '../../components/about-me/about-me';
import { MySkills } from '../../components/my-skills/my-skills';
import { Portfolio } from '../../components/portfolio/portfolio';
import { Contact } from '../../components/contact/contact';

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
  templateUrl: './main-content.html'
})
export class MainContentComponent {

}