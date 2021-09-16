import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  constructor(private httpService: HttpService) { }

  /*ldm */
  createLdm(postData: any): Observable<any> {
    return this.httpService.post('delivery/createldm', postData);
  }
  updateLdm(postData: any): Observable<any> {
    return this.httpService.post('delivery/updateldm', postData);
  }
  getAllLdm(postData: any): Observable<any> {
    return this.httpService.post('delivery/getallldm', postData);
  }
  getLdmById(postData: any): Observable<any> {
    return this.httpService.post('delivery/getldmbyid', postData);
  }
  deleteLdm(postData: any): Observable<any> {
    return this.httpService.post('delivery/deleteldm', postData);
  }
  deleteLdmGc(postData: any): Observable<any> {
    return this.httpService.post('delivery/deleteldmgc', postData);
  }
  addLdmGc(postData: any): Observable<any> {
    return this.httpService.post('delivery/addldmgc', postData);
  }
  addTurGc(postData: any): Observable<any> {
    return this.httpService.post('delivery/addturgc', postData);
  }
  deleteTurGc(postData: any): Observable<any> {
    return this.httpService.post('delivery/deleteturgc', postData);
  }



  createTur(postData: any): Observable<any> {
    return this.httpService.post('delivery/createtur', postData);
  }
  updateTur(postData: any): Observable<any> {
    return this.httpService.post('delivery/updatetur', postData);
  }
  getAllTur(postData: any): Observable<any> {
    return this.httpService.post('delivery/getalltur', postData);
  }
  getTurById(postData: any): Observable<any> {
    return this.httpService.post('delivery/getturbyid', postData);
  }
  deleteTur(postData: any): Observable<any> {
    return this.httpService.post('delivery/deletetur', postData);
  }
  /*pod */
  createPod(postData: any): Observable<any> {
    return this.httpService.post('delivery/createpod', postData);
  }
  getAllPod(postData: any): Observable<any> {
    return this.httpService.post('delivery/getallpod', postData);
  }
  getPodById(postData: any): Observable<any> {
    return this.httpService.post('delivery/getpodbyid', postData);
  }
  deletePod(postData: any): Observable<any> {
    return this.httpService.post('delivery/deletepod', postData);
  }
}
