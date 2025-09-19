import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Represents the Imprint (Impressum) page.
 * This component displays legally required information about the website's owner and publisher.
 */
@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './imprint.html',
  styleUrls: ['./imprint.scss']
})
export class Imprint {

}