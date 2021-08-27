import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-managers',
  templateUrl: './edit-managers.page.html',
  styleUrls: ['./edit-managers.page.scss'],
})
export class EditManagersPage implements OnInit {
  postData = {
    id: '',
    name: '',
    mobile: '',
    branch: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    password: ''
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
    this.getManagerById();
    this.getBranches();
  }
  validateInputs() {
    let Managermobile = this.postData.mobile.trim();
    return (
      Managermobile.length > 0
    );
  }

  updateManager() {
    console.log(this.postData)
    if (this.validateInputs()) {
      this.mSerivce.updateManager(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('Manager updated.');
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
  getManagerById() {
    if (this.postData.id) {
      this.mSerivce.getManagerById(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            console.log("sd", res.data)
            this.postData.id = res.data.id;
            this.postData.name = res.data.name;
            this.postData.mobile = res.data.mobile;
            this.postData.branch = res.data.branch;
            this.postData.area = res.data.area;
            this.postData.city = res.data.city;
            this.postData.state = res.data.state;
            this.postData.pincode = res.data.pincode;
            this.postData.password = res.data.password;
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

