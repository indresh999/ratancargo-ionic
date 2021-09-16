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
  getDrivers(postData: any): Observable<any> {
    return this.httpService.post('dropdowns/getdrivers', postData);
  }
  getSortedGc(postData: any): Observable<any> {
    return this.httpService.post('dropdowns/getsortedgc', postData);
  }
  getGcById(postData: any): Observable<any> {
    return this.httpService.post('dropdowns/getgcbyid', postData);
  }
  getGcByIdTlm(postData: any): Observable<any> {
    return this.httpService.post('dropdowns/getgcbyidtlm', postData);
  }
  getGcByIdLdm(postData: any): Observable<any> {
    return this.httpService.post('dropdowns/getgcbyidldm', postData);
  }
  getGcByIdTur(postData: any): Observable<any> {
    return this.httpService.post('dropdowns/getgcbyidtur', postData);
  }
  getNextNum(postData: any): Observable<any> {
    return this.httpService.post('dropdowns/getnextnum', postData);
  }
}
