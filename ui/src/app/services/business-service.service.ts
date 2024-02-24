import { Injectable } from '@angular/core';
import { dummyBusinesses } from '../../mock/mockBusiness';
import { Business } from '../../types/business';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  businesses = dummyBusinesses;
  constructor() { 

  }

  getBusinesses(): Observable<Business[]> {
    return of(this.businesses);
  }

  getBusinessById(id: string): Observable<Business | undefined> {
    const business = of(this.businesses.find(v => v.id === parseInt(id)));
    return business;
  }
}
