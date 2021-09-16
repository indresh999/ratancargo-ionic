import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from 'src/app/services/delivery.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-delivery-entry',
  templateUrl: './delivery-entry.page.html',
  styleUrls: ['./delivery-entry.page.scss'],
})
export class DeliveryEntryPage implements OnInit {
  segmentModel = 'ldmentry';
  postData = {

  }
  postTurData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 10
  }
  postLdmData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 10
  }
  postPodData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 10
  }
  ldm_items = [];
  tur_items = [];
  pod_items = [];
  constructor(private router: Router, private deliveryService: DeliveryService, private toastService: ToastService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.segmentModel = 'ldmentry';
  }
  addLdm() {
    this.router.navigate(['home/add-ldm']);
  }
  addTur() {
    this.router.navigate(['home/add-tur']);
  }
  addPod() {
    this.router.navigate(['home/add-pod']);
  }
  segmentChanged(event) {
    this.switchMaster(event.detail.value);
  }

  getldm() {
    this.ldm_items = [];
    if (this.postLdmData.id) {

      this.deliveryService.getAllLdm(this.postLdmData).subscribe(
        (res: any) => {
          console.log(res)
          for (let i = 0; i < res.data.length; i++) {
            this.ldm_items.push(res.data[i]);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  deleteLdm(id) {
    this.postLdmData.id = id;
    if (this.postLdmData.id) {
      this.deliveryService.deleteLdm(this.postLdmData).subscribe(
        (res: any) => {
          console.log(res)
          if (res) {
            this.toastService.presentToast(res.message);
            this.getldm();
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
  deleteTur(id) {
    this.postTurData.id = id;
    if (this.postTurData.id) {
      this.deliveryService.deleteTur(this.postTurData).subscribe(
        (res: any) => {
          console.log(res)
          if (res) {
            this.toastService.presentToast(res.message);
            this.gettur();
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
  deletePod(id) {
    this.postPodData.id = id;
    if (this.postPodData.id) {
      this.deliveryService.deletePod(this.postPodData).subscribe(
        (res: any) => {
          console.log(res)
          if (res) {
            this.toastService.presentToast(res.message);
            this.getldm();
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
  editLdm(id) {
    this.router.navigate(['home/edit-ldm', { id: id }]);
  }
  editTur(id) {
    this.router.navigate(['home/edit-tur', { id: id }]);
  }
  editPod(id) {
    this.router.navigate(['home/edit-pod', { id: id }]);
  }
  gettur() {
    this.tur_items = [];
    if (this.postTurData.id) {

      this.deliveryService.getAllTur(this.postTurData).subscribe(
        (res: any) => {
          console.log(res)
          for (let i = 0; i < res.data.length; i++) {
            this.tur_items.push(res.data[i]);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  getpod() {
    this.pod_items = [];
    if (this.postPodData.id) {

      this.deliveryService.getAllPod(this.postPodData).subscribe(
        (res: any) => {
          console.log(res)
          for (let i = 0; i < res.data.length; i++) {
            this.pod_items.push(res.data[i]);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  switchMaster(tab_name) {
    switch (tab_name) {
      case 'ldmentry':
        this.getldm();
        break;
      case 'turentry':
        this.gettur();
        break;
      case 'podentry':
        this.getpod();
        break;
      default:
        break;
    }
  }

  ionViewWillEnter() {
    var tab_name = this.activatedRoute.snapshot.paramMap.get('tab_name');
    if (tab_name == null) {
      this.segmentModel = 'ldmentry';
      tab_name = 'ldmentry';
    }
    this.switchMaster(tab_name)
  }
}
