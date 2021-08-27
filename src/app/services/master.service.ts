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
  createVehicle(postData: any): Observable<any> {
    return this.httpService.post('masters/vehicles/createvehicle', postData);
  }
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
  createManager(postData: any): Observable<any> {
    return this.httpService.post('masters/managers/createmanager', postData);
  }

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
  createDriver(postData: any): Observable<any> {
    return this.httpService.post('masters/drivers/createdriver', postData);
  }
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
  createAccount(postData: any): Observable<any> {
    return this.httpService.post('masters/accounts/createaccount', postData);
  }
  getAccountList(postData: any): Observable<any> {
    return this.httpService.post('masters/accounts/getaccounts', postData);
  }
  getAccountById(postData: any): Observable<any> {
    return this.httpService.post('masters/accounts/getaccountbyid', postData);
  }
  updateAccount(postData: any): Observable<any> {
    return this.httpService.post('masters/accounts/updateaccount', postData);
  }
  deleteAccount(postData: any): Observable<any> {
    return this.httpService.post('masters/accounts/deleteaccount', postData);
  }
}

