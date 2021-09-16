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
  getGcMop(postData: any): Observable<any> {
    return this.httpService.post('bookings/getgcmop', postData);
  }
  /*lcm */
  createLcm(postData: any): Observable<any> {
    return this.httpService.post('bookings/createlcm', postData);
  }
  updateLcm(postData: any): Observable<any> {
    return this.httpService.post('bookings/updatelcm', postData);
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
  updateTlm(postData: any): Observable<any> {
    return this.httpService.post('bookings/updatetlm', postData);
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
  addMop(postData: any): Observable<any> {
    return this.httpService.post('bookings/createmop', postData);
  }
  deleteMop(postData: any): Observable<any> {
    return this.httpService.post('bookings/deletemop', postData);
  }
  updateMop(postData: any): Observable<any> {
    return this.httpService.post('bookings/updatemop', postData);
  }
  addLcmGc(postData: any): Observable<any> {
    return this.httpService.post('bookings/addlcmgc', postData);
  }
  addTlmGc(postData: any): Observable<any> {
    return this.httpService.post('bookings/addtlmgc', postData);
  }
  deleteLcmGc(postData: any): Observable<any> {
    return this.httpService.post('bookings/deletelcmgc', postData);
  }
  deleteTlmGc(postData: any): Observable<any> {
    return this.httpService.post('bookings/deletetlmgc', postData);
  }

}
