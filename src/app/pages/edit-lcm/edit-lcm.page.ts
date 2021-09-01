import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingentryService } from 'src/app/services/bookingentry.service';
import { DropdownsService } from 'src/app/services/dropdowns.service';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-lcm',
  templateUrl: './edit-lcm.page.html',
  styleUrls: ['./edit-lcm.page.scss'],
})
export class EditLcmPage implements OnInit {
  postData = {
    lcmno: '',
    date: '',
    fbranch: '',
    tbranch: '',
    consignor: '',
    consignee: '',
    remark: '',
    invno: '',
    invvalue: '',
    loadtype: '',
    paytype: '',
    billingparty: '',
    vehicle: '',
    cod: '',
    collat: '',
    colltype: '',
    deliveryat: '',
    deliverytype: '',
    ebill1: '',
    ebill2: '',
    ebill3: '',
    ebill4: '',
    totalweight: '',
    chargeweight: '',
    totalf: '',
    doorcoll: '',
    doordelay: '',
    statecharge: '',
    hamali: '',
    godowncharges: '',
    codec: '',
    unionc: '',
    otherc: '',
    totalamount: '',
    createddtm: '',
    cnrid: '',
    cneid: '',
    qty: '',
    id: ''
  }

  postBranchData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 30
  }

  data: any;
  branch_items: any = [];

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

  constructor(private toastService: ToastService, private router: Router, private bService: BookingentryService, private mSerivce: MasterService, private dropDowns: DropdownsService) {
  }

  ngOnInit() {
    this.getBranches();
  }

  updateLcm() {
    if (this.postData.lcmno) {
      this.bService.createGc(this.postData).subscribe(
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
}
