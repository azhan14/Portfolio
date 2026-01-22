import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
})
export class ContactComponent {

  email: string = "azhanpatel77@gmail.com";
  emailLink: string = `mailto:${this.email}`;
  tel: string = "+918828069524";
  telToLink: string = `tel:${this.tel}`;
  github: string = "github.com/azhan14";
  linkedIn: string = "linkedin.com/in/azhan-patel-35b9a6181/";
  githubUrl: string = `https://${this.github}`;
  linkedInUrl: string = `https://${this.linkedIn}`;

}
