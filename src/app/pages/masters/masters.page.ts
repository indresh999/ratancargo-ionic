import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';
import { AlertController, ModalController } from '@ionic/angular';
import { EditBranchesPage } from '../edit-branches/edit-branches.page';
import { EditManagersPage } from '../edit-managers/edit-managers.page';
import { EditVehiclesPage } from '../edit-vehicles/edit-vehicles.page';
import { EditAccountPage } from '../edit-account/edit-account.page';
import { EditDriversPage } from '../edit-drivers/edit-drivers.page';
@Component({
  selector: 'app-masters',
  templateUrl: './masters.page.html',
  styleUrls: ['./masters.page.scss'],
})
export class MastersPage implements OnInit {
  segmentModel = 'branches';

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
  constructor(private router: Router, private masterService: MasterService, private toastService: ToastService, private activatedRoute: ActivatedRoute, private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() {
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
    this.switchMaster(event.detail.value);
  }

  switchMaster(tab_name) {
    switch (tab_name) {
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
    this.branch_items = [];
    if (this.postBranchData.id) {

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
    this.manager_items = [];
    if (this.postManagerData.id) {

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
    this.account_items = [];
    if (this.postAccountData.id) {

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
    this.driver_items = [];
    if (this.postDriverData.id) {

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

  async editBranchModal(id) {
    const modal = await this.modalController.create({
      component: EditBranchesPage,
      componentProps: {
        'id': id
      }
    });
    modal.onDidDismiss()
      .then(() => {
        this.getBranches();
      });
    return await modal.present();
  }
  async editManagerModal(id) {
    const modal = await this.modalController.create({
      component: EditManagersPage,
      componentProps: {
        'id': id
      }
    });
    modal.onDidDismiss()
      .then(() => {
        this.getManagers();
      });
    return await modal.present();
  }
  async editVehicleModal(id) {
    const modal = await this.modalController.create({
      component: EditVehiclesPage,
      componentProps: {
        'id': id
      }
    });
    modal.onDidDismiss()
      .then(() => {
        this.getVehicles();
      });
    return await modal.present();
  }
  async editAccountModal(id) {
    const modal = await this.modalController.create({
      component: EditAccountPage,
      componentProps: {
        'id': id
      }
    });
    modal.onDidDismiss()
      .then(() => {
        this.getAccounts();
      });
    return await modal.present();
  }
  async editDriverModal(id) {
    const modal = await this.modalController.create({
      component: EditDriversPage,
      componentProps: {
        'id': id
      }
    });
    modal.onDidDismiss()
      .then(() => {
        this.getDrivers();
      });
    return await modal.present();
  }

  deleteBranch(id) {
    this.postBranchData.id = id;
    if (this.postBranchData.id) {
      this.masterService.deleteBranch(this.postBranchData).subscribe(
        (res: any) => {
          console.log(res)
          if (res) {
            this.toastService.presentToast(res.message);
            this.getBranches();

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
  deleteManager(id) {
    this.postManagerData.id = id;
    if (this.postManagerData.id) {
      this.masterService.deleteManager(this.postManagerData).subscribe(
        (res: any) => {
          console.log(res)
          if (res) {
            this.toastService.presentToast(res.message);
            this.getManagers();

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

  deleteVehicle(id) {
    this.postManagerData.id = id;
    if (this.postManagerData.id) {
      this.masterService.deleteVehicle(this.postManagerData).subscribe(
        (res: any) => {
          console.log(res)
          if (res) {
            this.toastService.presentToast(res.message);
            this.getVehicles();

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
  deleteAccount(id) {
    this.postManagerData.id = id;
    if (this.postManagerData.id) {
      this.masterService.deleteAccount(this.postManagerData).subscribe(
        (res: any) => {
          console.log(res)
          if (res) {
            this.toastService.presentToast(res.message);
            this.getAccounts();

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
  deleteDriver(id) {
    this.postManagerData.id = id;
    if (this.postManagerData.id) {
      this.masterService.deleteDriver(this.postManagerData).subscribe(
        (res: any) => {
          console.log(res)
          if (res) {
            this.toastService.presentToast(res.message);
            this.getDrivers();

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


  async deleteConfirm(delete_type, id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  ionViewWillEnter() {

    var tab_name = this.activatedRoute.snapshot.paramMap.get('tab_name');
    if (tab_name == null) {
      this.segmentModel = 'branches';
      tab_name = 'branches';
    }
    this.switchMaster(tab_name)
  }
}
