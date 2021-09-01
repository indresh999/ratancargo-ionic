import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingentryService } from 'src/app/services/bookingentry.service';
import { DropdownsService } from 'src/app/services/dropdowns.service';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-gc',
  templateUrl: './add-gc.page.html',
  styleUrls: ['./add-gc.page.scss'],
})
export class AddGcPage implements OnInit {

  public exp = 2;
  experiences: any = [];

  postData = {
    gcno: '',
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
    actualweight: '',
    chargeweight: '',
    totalf: '',
    doorcoll: '',
    doordelay: '',
    statecharge: '',
    unioncharges: '',
    godowncharges: '',
    codcharges: '',
    hamali: '',
    godownc: '',
    codec: '',
    unionc: '',
    otherc: '',
    totalamount: '',
    createddtm: '',
    cnrid: '',
    cneid: '',
    qty: '',
    mop: this.experiences
  }
  postBranchData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 30
  }

  data: any;
  branch_items: any = [];
  consignee_items: any = [];
  consignor_items: any = [];

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

  index = 1;
  ngOnInit() {
    this.getBranches();
    this.getAccount();
  }
  constructor(private toastService: ToastService, private router: Router, private bService: BookingentryService, private mSerivce: MasterService, private dropDowns: DropdownsService) {
    this.experiences = [{ expId: 1 }]
  }
  addmore() {
    console.log(this.exp);
    this.exp = this.exp + 1;
    this.experiences.push({ expId: this.exp })
    this.index += 1;
    console.log(this.experiences)
  }

  remove() {
    let ind = this.index;
    if (ind != 0) {
      const ele = this.experiences[ind];
      let indexToRemove = this.experiences.indexOf(ele);
      console.log(ele, indexToRemove);
      if (indexToRemove == -1) return;
      this.experiences.splice(indexToRemove, 1);
      --this.index;
      --this.exp;
    }
  }

  addgc() {

    if (this.postData.gcno) {
      this.postData.mop = this.experiences;
      this.bService.createGc(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('New GC created.');
            this.router.navigate(['home/booking-entry', { tab_name: 'gcentry' }]);
          } else {
            this.toastService.presentToast('Somthing wrong.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast(
        'Please enter email/username or password.'
      );
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
  getAccount() {
    this.consignee_items = [];
    this.consignor_items = [];
    if (this.postBranchData.id) {
      this.dropDowns.getAccounts(this.postBranchData).subscribe(
        (res: any) => {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].accounttype == 'consignee') {
              this.consignee_items.push(res.data[i]);
            }
            if (res.data[i].accounttype == 'consignor') {
              this.consignor_items.push(res.data[i]);
            }
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }

  getAccountById(event) {
    if (event.detail.value) {
      this.postBranchData.id = event.detail.value;
      this.dropDowns.getAccountById(this.postBranchData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            if (res.data.accounttype == 'consignee') {
              this.consignee_data.id = res.data.id;
              this.consignee_data.account_type = res.data.accounttype;
              this.consignee_data.name = res.data.name;
              this.consignee_data.mobile = res.data.mobile;
              this.consignee_data.city = res.data.city;
              this.consignee_data.address = res.data.address1;
              this.consignee_data.gst = res.data.gst;
            }
            if (res.data.accounttype == 'consignor') {
              this.consignor_data.id = res.data.id;
              this.consignor_data.account_type = res.data.accounttype;
              this.consignor_data.name = res.data.name;
              this.consignor_data.mobile = res.data.mobile;
              this.consignor_data.address = res.data.address1;
              this.consignor_data.city = res.data.city;
              this.consignor_data.gst = res.data.gst;
            }
          } else {
            this.toastService.presentToast('Somthing wrong.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast(
        'Please enter email/username or password.'
      );
    }
  }
  ionViewWillEnter() {
    this.getBranches();
    this.getAccount();
  }
}

