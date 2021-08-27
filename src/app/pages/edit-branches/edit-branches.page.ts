import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-edit-branches',
  templateUrl: './edit-branches.page.html',
  styleUrls: ['./edit-branches.page.scss'],
})
export class EditBranchesPage implements OnInit {

  postData = {
    id: '',
    code: '',
    name: '',
    address: '',
    city: '',
    state: '',
    bankname: '',
    ifsc: '',
    accountno: '',
    gstno: ''
  }
  data: any;
  constructor(private mSerivce: MasterService, private toastService: ToastService, private router: Router, private navParams: NavParams, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.postData.id = this.navParams.get('id');
    console.log(this.postData.id)
    this.getBranchById();
  }
  validateInputs() {
    let branchname = this.postData.code.trim();
    let branchcode = this.postData.name.trim();
    return (
      this.postData.code &&
      this.postData.name &&
      branchname.length > 0 &&
      branchcode.length > 0
    );
  }

  updateBranch() {
    if (this.validateInputs()) {
      this.mSerivce.updateBranch(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('Branch updated.');
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
  getBranchById() {
    if (this.postData.id) {
      this.mSerivce.getBranchById(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            console.log("sd", res.data.code)
            this.postData.id = res.data.id;
            this.postData.code = res.data.code;
            this.postData.name = res.data.name;
            this.postData.address = res.data.address;
            this.postData.city = res.data.city;
            this.postData.state = res.data.state;
            this.postData.bankname = res.data.bankname;
            this.postData.accountno = res.data.accountno;
            this.postData.ifsc = res.data.ifsc;
            this.postData.gstno = res.data.gstno;
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

  dismiss() {
    this.modalCtrl.dismiss();
  }
  ionViewWillEnter() {
    /*
    this.postData.code = '',
      this.postData.name = '',
      this.postData.address = '',
      this.postData.city = '',
      this.postData.state = '',
      this.postData.bankname = '',
      this.postData.ifsc = '',
      this.postData.accountno = '',
      this.postData.gstno = ''
      */
  }
}

