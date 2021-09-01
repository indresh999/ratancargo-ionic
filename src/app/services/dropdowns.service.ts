import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DropdownsService {

  constructor(private httpService: HttpService) { }

  getAccounts(postData: any): Observable<any> {
    return this.httpService.post('dropdowns/getaccounts', postData);
  }
  getAccountById(postData: any): Observable<any> {
    return this.httpService.post('dropdowns/getaccountbyid', postData);
  }
  getVehicles(postData: any): Observable<any> {
    return this.httpService.post('dropdowns/getvehicles', postData);
  }
  getSortedGc(postData: any): Observable<any> {
    return this.httpService.post('dropdowns/getsortedgc', postData);
  }
}
