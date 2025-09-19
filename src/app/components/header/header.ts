import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

/**
 * Represents the main application header.
 * This component includes navigation, language selection, and a mobile menu toggle.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  /**
   * A flag to control the visibility of the mobile navigation menu.
   * `true` if the menu is open, `false` otherwise.
   */
  isMenuOpen = false;

  /**
   * Creates an instance of the Header component.
   * @param {TranslateService} translate The service for handling internationalization.
   */
  constructor(public translate: TranslateService) {}

  /**
   * Toggles the state of the mobile menu between open and closed.
   */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Switches the application's active language.
   * @param {string} language The language code to switch to (e.g., 'en', 'de').
   */
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}