import { Component } from '@angular/core';
import { MenuItem } from '../../../types/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.scss'
})
export class AdminNavbarComponent {
  menuClosed = true;
  profileMenuClosed = true;
  menuItems: MenuItem[]

  constructor() {
    this.menuItems = [
      {
        label: 'Dashboard',
        link: '/admin',
        isActive: false
      },
      {
        label: 'Manage Users',
        link: '/admin/users',
        isActive: false
      },
      {
        label: 'Manage Business',
        link: '/admin/business',
        isActive: false
      },
      {
        label: 'Settings',
        link: '/admin/settings',
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
