import { Component, OnInit } from '@angular/core';
import { Business } from '../../../types/business';
import { generateFakeBusiness } from '../../../mock/mockBusiness';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../../services/business-service.service';

@Component({
  selector: 'app-business-profile',
  standalone: true,
  imports: [],
  templateUrl: './business-profile.component.html',
  styleUrl: './business-profile.component.scss'
})
export class BusinessProfileComponent implements OnInit {
  business: Business | undefined;
  bid!: string;
  constructor(private _activatedRoute: ActivatedRoute, private  _businessService: BusinessService) {
    // this.business = generateFakeBusiness();
    this._activatedRoute.params.subscribe((p) => {
      this.bid = p['id']
    })
  }

  ngOnInit(): void {
    if(this.bid) {
      this._businessService.getBusinessById(this.bid).subscribe((b) => {
        this.business = b;
      })
    }
  }
}
