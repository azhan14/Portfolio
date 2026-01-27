import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar-component/navbar-component";
import { FooterComponent } from "./layout/footer-component/footer-component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, MatSidenavModule, MatButtonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('azhan-portfolio');

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/github.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/linkedin.svg')
    );  

    this.matIconRegistry.addSvgIcon(
      'email',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/envelope.svg')
    );
  }
}
