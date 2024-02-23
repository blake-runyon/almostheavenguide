import { Component } from '@angular/core';
import { Business } from '../../../types/business';
import { generateFakeBusiness } from '../../../mock/mockBusiness';

@Component({
  selector: 'app-business-profile',
  standalone: true,
  imports: [],
  templateUrl: './business-profile.component.html',
  styleUrl: './business-profile.component.scss'
})
export class BusinessProfileComponent {
  business: Business;
  constructor() {
    this.business = generateFakeBusiness();
  }
}
