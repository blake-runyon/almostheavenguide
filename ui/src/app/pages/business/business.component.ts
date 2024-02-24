import { Component } from '@angular/core';
import { ReadonlyTableComponent } from '../../components/readonly-table/readonly-table.component';
import { generateFakeBusinessArray } from '../../../mock/mockBusiness';
import { Column } from '../../../types/tables';
import { CommonModule } from '@angular/common';
import { Business } from '../../../types/business';
import { Router, RouterModule } from '@angular/router';
import { BusinessService } from '../../services/business-service.service';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [ReadonlyTableComponent, CommonModule, RouterModule],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss'
})
export class BusinessComponent {
  columns: Column[];
  business: Business[] = [];

  constructor(private _router: Router, private _businessService: BusinessService) {
    this.columns = [
      {
        header: 'Name',
        field: 'name'
      },
      {
        header: 'Category',
        field: 'category'
      },
      {
        header: 'Street',
        field: 'address',
        subfield: 'street'
      },
      {
        header: 'City',
        field: 'address',
        subfield: 'city'
      },
      {
        header: 'State',
        field: 'address',
        subfield: 'state'
      },
      {
        header: 'Zip Code',
        field: 'address',
        subfield: 'zipcode'
      },
    ];

    this._businessService.getBusinesses().subscribe((arr) => {
      this.business = arr;
    })
  }

  getDataField(business: Business, col: Column): string {
    if(col.subfield != null || col.subfield != undefined) {
      return business[col.field as keyof Object][col.subfield as keyof Object].toString();
    } else {
      return business[col.field as keyof Object].toString();
    }
  }

  logEvent(event: any) {
    console.log(event as Business);
  }

  handleDblClick(event: any) {
    const business = event as Business;
    this._router.navigateByUrl(`/business/${business.id}`);
  }
}
