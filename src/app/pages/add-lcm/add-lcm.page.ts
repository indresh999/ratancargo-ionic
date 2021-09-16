import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingentryService } from 'src/app/services/bookingentry.service';
import { DropdownsService } from 'src/app/services/dropdowns.service';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-lcm',
  templateUrl: './add-lcm.page.html',
  styleUrls: ['./add-lcm.page.scss'],
})
export class AddLcmPage implements OnInit {
  postData = {
    lcmno: '',
    date: '',
    branch: '',
    area: '',
    vehicle: '',
    driver: '',
    supervisor: '',
    loader: '',
    qty: 0,
    weight: 0,
    amount: 0,
    remark: ''

  }

  postBranchData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 30
  }

  data: any;
  branch_items: any = [];
  gc_items: any = [];
  vehicle_items: any = [];
  driver_items: any = [];
  gc_list_items: any = [];


  consignee_data = {
    id: '',
    account_type: '',
    name: '',
    mobile: '',
    city: '',
    address: '',
    gst: ''
  }
  consignor_data = {
    id: '',
    account_type: '',
    name: '',
    mobile: '',
    city: '',
    address: '',
    gst: ''
  }
  postVehicleData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 30
  }
  postSortedGcData = {
    id: '1',
    gcno: '',
    lcmno: '',
    name: '',
    pid: '1',
    limit: 30
  }
  constructor(private toastService: ToastService, private router: Router, private bService: BookingentryService, private mSerivce: MasterService, private dropDowns: DropdownsService) {
  }

  ngOnInit() {


  }

  addLcm() {
    if (this.postData.lcmno) {
      this.bService.createLcm(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('New LCM created.');
            this.router.navigate(['home/booking-entry', { tab_name: 'lcmentry' }]);
          } else {
            this.toastService.presentToast('Somthing wrong.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast('Somthing wrong.');
    }
  }
  getBranches() {
    if (this.postBranchData.id) {
      this.branch_items = [];
      this.mSerivce.getBranchList(this.postBranchData).subscribe(
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

  /**Gc code  */

  postLcmGc = {
    id: '1',
    gcid: '',
    lcmno: '',
    index: 0,
    nextNum: 0,
    type: ''
  }


  getSortedGc() {
    if (this.postBranchData.id) {
      this.gc_items = [];
      this.dropDowns.getSortedGc(this.postSortedGcData).subscribe(
        (res: any) => {
          for (let i = 0; i < res.data.length; i++) {
            this.gc_items.push(res.data[i]);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  getDriver() {
    this.driver_items = [];
    this.dropDowns.getDrivers(this.postBranchData).subscribe(
      (res: any) => {
        for (let i = 0; i < res.data.length; i++) {
          this.driver_items.push(res.data[i]);
        }
        console.log(res.data)
      },
      (error: any) => {
        this.toastService.presentToast('Network Issue.');
      }
    );
  }
  getVehicles() {
    this.vehicle_items = [];
    this.dropDowns.getVehicles(this.postBranchData).subscribe(
      (res: any) => {
        for (let i = 0; i < res.data.length; i++) {
          this.vehicle_items.push(res.data[i]);
        }
      },
      (error: any) => {
        this.toastService.presentToast('Network Issue.');
      }
    );
  }
  getGcById() {
    if (this.postSortedGcData.gcno) {
      this.gc_list_items = [];
      this.postSortedGcData.lcmno = this.postData.lcmno;
      this.dropDowns.getGcById(this.postSortedGcData).subscribe(
        (res: any) => {
          for (let i = 0; i < res.data.length; i++) {
            this.gc_list_items.push(res.data[i]);

            this.postData.weight += parseFloat(res.data[i].actualweight);
            this.postData.amount += parseFloat(res.data[i].totalamount);
            this.postData.qty += parseFloat(res.data[i].qty);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }

  addGcToLcm() {
    console.log(this.postSortedGcData)
    this.postLcmGc.lcmno = this.postData.lcmno;
    this.postLcmGc.gcid = this.postSortedGcData.gcno;
    if (this.postLcmGc.lcmno) {
      this.bService.addLcmGc(this.postLcmGc).subscribe(
        (res: any) => {
          if (res.data) {
            this.getGcById();
            this.toastService.presentToast('GC added.');
          } else {
            this.toastService.presentToast('Somthing wrong.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast('Somthing wrong.');
    }
  }
  deleteLcmGc(gcid) {
    this.postLcmGc.gcid = gcid;
    if (this.postLcmGc.gcid) {
      this.bService.deleteLcmGc(this.postLcmGc).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.postData.weight = 0;
            this.postData.amount = 0;
            this.postData.qty = 0;

            this.getGcById();
            this.toastService.presentToast('GC removed.');
          } else {
            this.toastService.presentToast('Somthing wrong.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast('Somthing wrong.');
    }
  }

  getNextNumber(type) {
    this.postLcmGc.type = type;
    this.dropDowns.getNextNum(this.postLcmGc).subscribe(
      (res: any) => {
        this.postLcmGc.nextNum = res.data.nextid;
        console.log(res.data.nextid)
        console.log(res.data)
        ++this.postLcmGc.nextNum;
        this.postData.lcmno = 'LCM' + this.postLcmGc.nextNum;
      },
      (error: any) => {
        this.toastService.presentToast('Network Issue.');
      }
    );
  }
  /*
  generateNumber(type) {
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    var newNumber = zeroPad(100, 4);
    this.postData.lcmno = type + newNumber;
  }
  */
  ionViewWillEnter() {
    this.getNextNumber(2);
    this.getBranches();
    this.getVehicles();
    this.getDriver();
    this.getSortedGc();
  }
}
