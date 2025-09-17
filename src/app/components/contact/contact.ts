import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  isMessageSent = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isMessageSent = true;
      form.resetForm();
      
      setTimeout(() => {
        this.isMessageSent = false;
      }, 4000);
    }
  }
}