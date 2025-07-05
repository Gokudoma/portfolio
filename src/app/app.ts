import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { HeroSection } from './components/hero-section/hero-section';
import { AboutMe } from './components/about-me/about-me';
import { MySkills } from './components/my-skills/my-skills';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    HeroSection,
    AboutMe,
    MySkills,
    Portfolio,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'portfolio';
}