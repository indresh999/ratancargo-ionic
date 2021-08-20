import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.page.html',
  styleUrls: ['./masters.page.scss'],
})
export class MastersPage implements OnInit {
  segmentModel: string;

  postBranchData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 10
  }
  postManagerData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 10
  }
  postVehicleData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 10
  }
  postAccountData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 10
  }
  postDriverData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 10
  }
  branch_items: any = [];
  manager_items: any = [];
  vehicle_items: any = [];
  account_items: any = [];
  driver_items: any = [];
  constructor(private router: Router, private masterService: MasterService, private toastService: ToastService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.segmentModel = 'branches';
    this.getBranches();
  }
  addBranch(router) {
    this.router.navigate([router]);
  }
  addManager() {
    this.router.navigate(['home/add-managers']);
  }
  addVehicle() {
    this.router.navigate(['home/add-vehicles']);
  }
  addAccount() {
    this.router.navigate(['home/add-accounts']);
  }
  addDriver() {
    this.router.navigate(['home/add-drivers']);
  }
  segmentChanged(event) {
    switch (event.detail.value) {
      case 'branches':
        this.getBranches();
        break;
      case 'managers':
        this.getManagers();
        break;
      case 'accounts':
        this.getAccounts();
        break;
      case 'drivers':
        this.getDrivers();
        break;
      case 'vehicles':
        this.getVehicles();
        break;

      default:
        break;
    }
  }
  /*Branch code*/
  getBranches() {
    if (this.postBranchData.id) {
      this.branch_items = [];
      this.masterService.getBranchList(this.postBranchData).subscribe(
        (res: any) => {
          for (let i = 0; i < res.data.length; i++) {
            this.branch_items.push(res.data[i]);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  getManagers() {
    if (this.postManagerData.id) {
      this.manager_items = [];
      this.masterService.getManagerList(this.postManagerData).subscribe(
        (res: any) => {
          console.log(res)
          for (let i = 0; i < res.data.length; i++) {
            this.manager_items.push(res.data[i]);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  getVehicles() {
    if (this.postVehicleData.id) {
      this.vehicle_items = [];
      this.masterService.getVehicleList(this.postVehicleData).subscribe(
        (res: any) => {
          for (let i = 0; i < res.data.length; i++) {
            console.log(res)
            this.vehicle_items.push(res.data[i]);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  getAccounts() {
    if (this.postAccountData.id) {
      this.account_items = [];
      this.masterService.getAccountList(this.postAccountData).subscribe(
        (res: any) => {
          for (let i = 0; i < res.data.length; i++) {
            console.log(res)
            this.account_items.push(res.data[i]);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  getDrivers() {
    if (this.postDriverData.id) {
      this.driver_items = [];
      this.masterService.getDriverList(this.postDriverData).subscribe(
        (res: any) => {
          console.log(res)
          for (let i = 0; i < res.data.length; i++) {
            this.driver_items.push(res.data[i]);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  ionViewWillEnter() {
    this.segmentModel = this.activatedRoute.snapshot.paramMap.get('tab_name');
  }
}
