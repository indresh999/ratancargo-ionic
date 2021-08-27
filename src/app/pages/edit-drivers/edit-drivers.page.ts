import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-drivers',
  templateUrl: './edit-drivers.page.html',
  styleUrls: ['./edit-drivers.page.scss'],
})
export class EditDriversPage implements OnInit {

  postData = {
    id: '',
    name: '',
    mobile: '',
    city: '',
    state: '',
    poliscestation: '',
    aadhar: '',
    ifscno: '',
    accountno: '',
    panno: '',
    licence: ''
  }
  data: any;
  constructor(private mSerivce: MasterService, private toastService: ToastService, private router: Router, private navParams: NavParams, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.postData.id = this.navParams.get('id');
    console.log(this.postData.id)
    this.getDriverById();
  }

  updateDriver() {
    if (this.postData.mobile) {
      this.mSerivce.updateDriver(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('Driver updated.');
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
  getDriverById() {
    if (this.postData.id) {
      this.mSerivce.getDriverById(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {

            this.postData.id = res.data.id
            this.postData.name = res.data.name
            this.postData.mobile = res.data.mobile
            this.postData.city = res.data.city
            this.postData.state = res.data.state
            this.postData.poliscestation = res.data.policst
            this.postData.aadhar = res.data.aadharno
            this.postData.ifscno = res.data.ifsc
            this.postData.accountno = res.data.acno
            this.postData.panno = res.data.panno
            this.postData.licence = res.data.licno
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

