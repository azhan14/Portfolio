import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss',
})
export class FooterComponent {
  githubUrl: string = "https://github.com/azhan14";
  linkedInUrl: string = "https://www.linkedin.com/in/azhan-patel-35b9a6181/";
  emailAddress: string = "mailto:azhanpatel77@gmail.com";
}

