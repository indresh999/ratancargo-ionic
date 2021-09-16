import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-vehicles',
  templateUrl: './edit-vehicles.page.html',
  styleUrls: ['./edit-vehicles.page.scss'],
})
export class EditVehiclesPage implements OnInit {

  postData = {
    id: '',
    vehiclename: '',
    regno: '',
    engineno: '',
    chassisno: '',
    puc: '',
    type: '',
    loadcapacity: '',
    ownername: '',
    address: '',
    permitno: '',
    financecompany: '',
    insurancecompany: '',
    insurancerenewdate: ''
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
    this.getVehicleById();
    this.getBranches();
  }


  updateVehicle() {
    console.log(this.postData)
    if (this.postData.vehiclename) {
      this.mSerivce.updateVehicle(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('Vehicle updated.');
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
  getVehicleById() {
    if (this.postData.id) {
      this.mSerivce.getVehicleById(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.postData.vehiclename = res.data.name;
            this.postData.regno = res.data.reg;
            this.postData.engineno = res.data.engine;
            this.postData.chassisno = res.data.chassis;
            this.postData.puc = res.data.puc;
            this.postData.type = res.data.type;
            this.postData.loadcapacity = res.data.loadcapacity;
            this.postData.ownername = res.data.owner;
            this.postData.address = res.data.address;
            this.postData.permitno = res.data.permit;
            this.postData.financecompany = res.data.finance;
            this.postData.insurancecompany = res.data.insurance;
            this.postData.insurancerenewdate = res.data.insdate;
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

