import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { ClientNavbarComponent } from './components/client-navbar/client-navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { BusinessProfileComponent } from './components/business-profile/business-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminNavbarComponent, ClientNavbarComponent, CommonModule, FooterComponent, BusinessProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui';
  isAdmin = false;
  devMode = true;

  toggleView() {
    this.isAdmin = !this.isAdmin;
  }
}
