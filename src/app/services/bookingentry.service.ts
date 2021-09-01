import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BookingentryService {
  feedData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) { }

  createGc(postData: any): Observable<any> {
    return this.httpService.post('bookings/creategc', postData);
  }
  updateGc(postData: any): Observable<any> {
    return this.httpService.post('bookings/updategc', postData);
  }
  getAllGc(postData: any): Observable<any> {
    return this.httpService.post('bookings/getallgc', postData);
  }
  getGcById(postData: any): Observable<any> {
    return this.httpService.post('bookings/getgcbyid', postData);
  }
  deleteGc(postData: any): Observable<any> {
    return this.httpService.post('bookings/deletegc', postData);
  }
  /*lcm */
  createLcm(postData: any): Observable<any> {
    return this.httpService.post('bookings/createlcm', postData);
  }
  getAllLcm(postData: any): Observable<any> {
    return this.httpService.post('bookings/getalllcm', postData);
  }
  getLcmById(postData: any): Observable<any> {
    return this.httpService.post('bookings/getlcmbyid', postData);
  }
  deleteLcm(postData: any): Observable<any> {
    return this.httpService.post('bookings/deletelcm', postData);
  }
  /*tlm */
  createTlm(postData: any): Observable<any> {
    return this.httpService.post('bookings/createtlm', postData);
  }
  getAllTlm(postData: any): Observable<any> {
    return this.httpService.post('bookings/getalltlm', postData);
  }
  getTlmById(postData: any): Observable<any> {
    return this.httpService.post('bookings/gettlmbyid', postData);
  }
  deleteTlm(postData: any): Observable<any> {
    return this.httpService.post('bookings/deletetlm', postData);
  }
}
