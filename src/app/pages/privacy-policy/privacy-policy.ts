import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Represents the Privacy Policy page.
 * This component is responsible for displaying the website's privacy policy information.
 */
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicyComponent {

}
