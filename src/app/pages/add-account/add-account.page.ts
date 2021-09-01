import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownsService } from 'src/app/services/dropdowns.service';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.page.html',
  styleUrls: ['./add-account.page.scss'],
})
export class AddAccountPage implements OnInit {
  postData = {
    accounttype: '',
    name: '',
    mobile: '',
    email: '',
    city: '',
    state: '',
    address1: '',
    address2: '',
    bankname: '',
    ifsc: '',
    accountno: '',
    panno: '',
    tinno: '',
    gst: '',
    cbranchname: ''
  }

  postBranchData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 30
  }

  data: any;
  branch_items: any = [];
  consignee: any = [];
  consignor: any = [];
  constructor(private mSerivce: MasterService, private toastService: ToastService, private router: Router, private dropDowns: DropdownsService) { }

  ngOnInit() {
    this.getBranches();
  }

  saveAccount() {

    if (this.postData.name) {
      this.mSerivce.createAccount(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('New Account added.');
            this.router.navigate(['home/masters', { tab_name: 'accounts' }]);
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

  ionViewWillEnter() {
    this.postData.accounttype = '',
      this.postData.name = '',
      this.postData.mobile = '',
      this.postData.email = '',
      this.postData.city = '',
      this.postData.state = '',
      this.postData.address1 = '',
      this.postData.address2 = '',
      this.postData.bankname = '',
      this.postData.ifsc = '',
      this.postData.accountno = '',
      this.postData.panno = '',
      this.postData.tinno = '',
      this.postData.gst = '',
      this.postData.cbranchname = ''
  }
}

