import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  isMessageSent = false;

  constructor(private http: HttpClient) {}

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
          },
          error: (error) => {
            console.error('Fehler beim Senden der Nachricht:', error);
          }
        });
    }
  }
}