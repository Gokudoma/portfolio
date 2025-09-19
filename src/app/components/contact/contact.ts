import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

/**
 * Represents the contact form component.
 * This component allows users to send a message through a form.
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  /**
   * A flag to indicate whether the message has been sent successfully.
   * Used to show a confirmation message to the user.
   */
  isMessageSent = false;

  /**
   * Creates an instance of the Contact component.
   * @param {HttpClient} http The Angular HttpClient for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Handles the contact form submission.
   * It validates the form and, if valid, sends the data to a backend service.
   * On successful submission, it shows a confirmation message and resets the form.
   * @param {NgForm} form The form instance containing the user's input.
   */
  onSubmit(form: NgForm) {
    if (form.valid && form.submitted) {
      const formData = new FormData();
      formData.append('name', form.value.name);
      formData.append('email', form.value.email);
      formData.append('message', form.value.message);

      this.http.post('https://formspree.io/f/xldwywkq', formData)
        .subscribe({
          next: () => {
            this.isMessageSent = true;
            form.resetForm();
            setTimeout(() => {
              this.isMessageSent = false;
            }, 4000);
          }
        });
    }
  }
}