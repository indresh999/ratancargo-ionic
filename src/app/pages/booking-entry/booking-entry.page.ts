import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingentryService } from 'src/app/services/bookingentry.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-booking-entry',
  templateUrl: './booking-entry.page.html',
  styleUrls: ['./booking-entry.page.scss'],
})
export class BookingEntryPage implements OnInit {
  segmentModel = 'gcentry';
  postData = {

  }
  postGcData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 10
  }
  postLcmData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 10
  }
  postTlmData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 10
  }
  gc_items = [];
  lcm_items = [];
  tlm_items = [];
  constructor(private router: Router, private bookingService: BookingentryService, private toastService: ToastService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }
  addGc() {
    this.router.navigate(['home/add-gc']);
  }
  addLcm() {
    this.router.navigate(['home/add-lcm']);
  }
  addTlm() {
    this.router.navigate(['home/add-tlm']);
  }
  segmentChanged(event) {
    this.switchMaster(event.detail.value);
  }

  getGc() {
    this.gc_items = [];
    if (this.postGcData.id) {

      this.bookingService.getAllGc(this.postGcData).subscribe(
        (res: any) => {
          console.log(res)
          for (let i = 0; i < res.data.length; i++) {
            this.gc_items.push(res.data[i]);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  deleteGc(id) {
    this.postGcData.id = id;
    if (this.postGcData.id) {
      this.bookingService.deleteGc(this.postGcData).subscribe(
        (res: any) => {
          console.log(res)
          if (res) {
            this.toastService.presentToast(res.message);
            this.getGc();
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
  deleteLcm(id) {
    this.postLcmData.id = id;
    if (this.postLcmData.id) {
      this.bookingService.deleteLcm(this.postLcmData).subscribe(
        (res: any) => {
          console.log(res)
          if (res) {
            this.toastService.presentToast(res.message);
            this.getLcm();
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
  deleteTlm(id) {
    this.postTlmData.id = id;
    if (this.postTlmData.id) {
      this.bookingService.deleteTlm(this.postTlmData).subscribe(
        (res: any) => {
          console.log(res)
          if (res) {
            this.toastService.presentToast(res.message);
            this.getGc();
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
  editGc(id) {
    this.router.navigate(['home/edit-gc', { id: id }]);
  }
  editLcm(id) {
    this.router.navigate(['home/edit-lcm', { id: id }]);
  }
  editTlm(id) {
    this.router.navigate(['home/edit-tlm', { id: id }]);
  }
  getLcm() {
    this.lcm_items = [];
    if (this.postLcmData.id) {

      this.bookingService.getAllLcm(this.postLcmData).subscribe(
        (res: any) => {
          console.log(res)
          for (let i = 0; i < res.data.length; i++) {
            this.lcm_items.push(res.data[i]);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  getTlm() {
    this.tlm_items = [];
    if (this.postTlmData.id) {

      this.bookingService.getAllTlm(this.postTlmData).subscribe(
        (res: any) => {
          console.log(res)
          for (let i = 0; i < res.data.length; i++) {
            this.tlm_items.push(res.data[i]);
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
      case 'gcentry':
        this.getGc();
        break;
      case 'lcmentry':
        this.getLcm();
        break;
      case 'tlmentry':
        this.getTlm();
        break;
      default:
        break;
    }
  }

  ionViewWillEnter() {
    var tab_name = this.activatedRoute.snapshot.paramMap.get('tab_name');
    if (tab_name == null) {
      this.segmentModel = 'gcentry';
      tab_name = 'gcentry';
    }
    this.switchMaster(tab_name)
  }
}
