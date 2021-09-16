import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {

  postData = {
    id: '',
    accounttype: '',
    name: '',
    mobile: '',
    email: '',
    city: '',
    state: '',
    address1: '',
    address2: '',
    bankname: '',
    ifscno: '',
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
  branch_items: any = [];
  data: any;
  constructor(private mSerivce: MasterService, private toastService: ToastService, private router: Router, private navParams: NavParams, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.postData.id = this.navParams.get('id');
    console.log(this.postData.id)
    this.getAccountById();
    this.getBranches();
  }

  updateAccount() {
    console.log(this.postData)
    if (this.postData.name) {
      this.mSerivce.updateAccount(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('Account updated.');
            this.modalCtrl.dismiss();
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
  getAccountById() {
    if (this.postData.id) {
      this.mSerivce.getAccountById(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.postData.accounttype = res.data.accounttype;
            this.postData.name = res.data.name;
            this.postData.mobile = res.data.mobile;
            this.postData.email = res.data.email;
            this.postData.city = res.data.city;
            this.postData.state = res.data.state;
            this.postData.address1 = res.data.address1;
            this.postData.address2 = res.data.address2;
            this.postData.bankname = res.data.bankname;
            this.postData.ifscno = res.data.ifsc;
            this.postData.accountno = res.data.accountno;
            this.postData.panno = res.data.panno;
            this.postData.tinno = res.data.tinno;
            this.postData.gst = res.data.gst;
            this.postData.cbranchname = res.data.cbranchname;
            console.log(res.data)
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


  dismiss() {
    this.modalCtrl.dismiss();
  }
  ionViewWillEnter() {

  }
}

