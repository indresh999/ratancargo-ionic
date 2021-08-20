import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  feedData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) { }

  getBranchList(postData: any): Observable<any> {
    return this.httpService.post('masters/branches/getbranches', postData);
  }
  createBranch(postData: any): Observable<any> {
    return this.httpService.post('masters/branches/createbranch', postData);
  }
  getBranchById(postData: any): Observable<any> {
    return this.httpService.post('masters/branches/getbranchbyid', postData);
  }
  updateBranch(postData: any): Observable<any> {
    return this.httpService.post('masters/branches/updatebranch', postData);
  }
  deleteBranch(postData: any): Observable<any> {
    return this.httpService.post('masters/branches/deletebranch', postData);
  }
  /**Vehicle */
  getVehicleList(postData: any): Observable<any> {
    return this.httpService.post('masters/vehicles/getvehicles', postData);
  }
  getVehicleById(postData: any): Observable<any> {
    return this.httpService.post('masters/vehicles/getvehiclebyid', postData);
  }
  updateVehicle(postData: any): Observable<any> {
    return this.httpService.post('masters/vehicles/updatevehicle', postData);
  }
  deleteVehicle(postData: any): Observable<any> {
    return this.httpService.post('masters/vehicles/deletevehicle', postData);
  }

  /**Manager */
  getManagerList(postData: any): Observable<any> {
    return this.httpService.post('masters/managers/getmanagers', postData);
  }
  getManagerById(postData: any): Observable<any> {
    return this.httpService.post('masters/managers/getmanagerbyid', postData);
  }
  updateManager(postData: any): Observable<any> {
    return this.httpService.post('masters/managers/updatemanager', postData);
  }
  deleteManager(postData: any): Observable<any> {
    return this.httpService.post('masters/managers/deletemanager', postData);
  }
  /**Driver */
  getDriverList(postData: any): Observable<any> {
    return this.httpService.post('masters/drivers/getdrivers', postData);
  }
  getDriverById(postData: any): Observable<any> {
    return this.httpService.post('masters/drivers/getdriverbyid', postData);
  }
  updateDriver(postData: any): Observable<any> {
    return this.httpService.post('masters/drivers/updatedriver', postData);
  }
  deleteDriver(postData: any): Observable<any> {
    return this.httpService.post('masters/drivers/deletedriver', postData);
  }
  /**Account */
  getAccountList(postData: any): Observable<any> {
    return this.httpService.post('masters/accounts/getaccounts', postData);
  }
  getAccountById(postData: any): Observable<any> {
    return this.httpService.post('masters/accounts/getaccountsbyid', postData);
  }
  updateAccount(postData: any): Observable<any> {
    return this.httpService.post('masters/accounts/updateaccounts', postData);
  }
  deleteAccount(postData: any): Observable<any> {
    return this.httpService.post('masters/accounts/deleteaccounts', postData);
  }
}

