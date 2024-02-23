import { Component } from '@angular/core';
import { ReadonlyTableComponent } from '../../components/readonly-table/readonly-table.component';
import { generateFakeBusinessArray } from '../../../mock/mockBusiness';
import { Column } from '../../../types/tables';
import { CommonModule } from '@angular/common';
import { Business } from '../../../types/business';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [ReadonlyTableComponent, CommonModule],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss'
})
export class BusinessComponent {
  columns: Column[];
  business = generateFakeBusinessArray() as Business[];

  constructor() {
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
    ]
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
}
