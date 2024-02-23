import { Component } from '@angular/core';
import { MenuItem } from '../../../types/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-navbar.component.html',
  styleUrl: './client-navbar.component.scss'
})

export class ClientNavbarComponent {
  menuClosed = true;
  profileMenuClosed = true;
  menuItems: MenuItem[]

  constructor() {
    this.menuItems = [
      {
        label: 'Home',
        link: '/',
        isActive: false
      },
      {
        label: 'Visit',
        link: '/visit',
        isActive: false
      },
      {
        label: 'Explore',
        link: '/explore',
        isActive: false
      },
      {
        label: 'Business',
        link: '/business',
        isActive: false
      },
    ]
  }

  toggleMenu() {
    this.menuClosed = !this.menuClosed;
  }

  toggleProfileMenu() {
    this.profileMenuClosed = !this.profileMenuClosed;
  }
}
