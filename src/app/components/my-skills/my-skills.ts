import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Represents the "My Skills" section of the application.
 * This component is designed to showcase a list of skills, typically technical or professional.
 */
@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss'
})
export class MySkills {

}