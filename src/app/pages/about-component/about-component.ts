import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatProgressBarModule],
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss',
})
export class AboutComponent {

}
