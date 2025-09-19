import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Represents the portfolio section of the application.
 * This component showcases a collection of projects.
 */
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {

}