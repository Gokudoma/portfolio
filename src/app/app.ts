import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { TranslateService } from '@ngx-translate/core';

/**
 * Represents the root component of the application.
 * It serves as the main layout container, holding the header, footer,
 * and the router outlet for displaying different pages.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  /**
   * Creates an instance of the AppComponent.
   * Initializes the translation service by setting the default and current language to English.
   * @param {TranslateService} translate The service for handling internationalization.
   */
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
