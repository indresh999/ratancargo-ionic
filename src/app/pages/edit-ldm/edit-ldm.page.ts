import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingentryService } from 'src/app/services/bookingentry.service';
import { DeliveryService } from 'src/app/services/delivery.service';
import { DropdownsService } from 'src/app/services/dropdowns.service';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-ldm',
  templateUrl: './edit-ldm.page.html',
  styleUrls: ['./edit-ldm.page.scss'],
})
export class EditLdmPage implements OnInit {
  postData = {
    id: '',
    ldmno: '',
    date: '',
    branch: '',
    area: '',
    vehicle: '',
    driver: '',
    supervisor: '',
    loader: '',
    qty: 0,
    weight: 0,
    amount: 0,
    remark: ''
  }

  postLdmGc = {
    id: '1',
    gcid: '',
    ldmno: '',
    index: 0,
    nextNum: 0,
    type: ''
  }

  postSortedGcData = {
    id: '1',
    gcno: '',
    ldmno: '',
    name: '',
    pid: '1',
    limit: 30
  }

  postBranchData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 30
  }

  data: any;
  branch_items: any = [];
  gc_items: any = [];
  vehicle_items: any = [];
  driver_items: any = [];

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
  postVehicleData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 30
  }
  gc_list_items = [];
  constructor(private toastService: ToastService, private router: Router, private dservice: DeliveryService, private mSerivce: MasterService, private dropDowns: DropdownsService, private activatedroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.postData.id = this.activatedroute.snapshot.paramMap.get('id');
    this.getBranches();
    this.getVehicles();
    this.getDriver();

  }

  updateLdm() {
    if (this.postData.ldmno) {
      this.dservice.updateLdm(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('Update TLM .');
            this.router.navigate(['home/booking-entry', { tab_name: 'ldmentry' }]);
          } else {
            this.toastService.presentToast('Somthing wrong.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast('Somthing wrong.');
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
  getLdmById() {
    if (this.postData.id) {
      this.dservice.getLdmById(this.postData).subscribe(
        (res: any) => {
          console.log(res.data)
          this.postData.ldmno = res.data.ldmno;
          this.postData.date = res.data.ldmdate;
          this.postData.branch = res.data.branch;
          this.postData.area = res.data.area;
          this.postData.vehicle = res.data.vehicle;
          this.postData.driver = res.data.driver;
          this.postData.supervisor = res.data.supervisor;
          this.postData.loader = res.data.loader;
          this.postData.qty = res.data.qty;
          this.postData.weight = res.data.weight;
          this.postData.amount = res.data.amount;
          this.postData.remark = res.data.remark;

          this.postSortedGcData.ldmno = res.data.ldmno;
          this.getGcById();
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  getGcById() {
    if (this.postSortedGcData.ldmno) {
      this.postData.weight = 0;
      this.postData.amount = 0;
      this.postData.qty = 0;

      this.gc_list_items = [];
      this.postSortedGcData.ldmno = this.postData.ldmno;
      this.postSortedGcData.id = this.postSortedGcData.gcno;

      this.dropDowns.getGcByIdLdm(this.postSortedGcData).subscribe(
        (res: any) => {
          for (let i = 0; i < res.data.length; i++) {
            this.gc_list_items.push(res.data[i]);
            this.postData.weight += parseFloat(res.data[i].actualweight);
            this.postData.amount += parseFloat(res.data[i].totalamount);
            this.postData.qty += parseFloat(res.data[i].qty);
          }
          console.log(res.data)
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  getSortedGc() {
    this.gc_items = [];
    this.dropDowns.getSortedGc(this.postSortedGcData).subscribe(
      (res: any) => {
        for (let i = 0; i < res.data.length; i++) {
          this.gc_items.push(res.data[i]);
        }
      },
      (error: any) => {
        this.toastService.presentToast('Network Issue.');
      }
    );
  }
  getVehicles() {
    if (this.postBranchData.id) {
      this.vehicle_items = [];
      this.dropDowns.getVehicles(this.postBranchData).subscribe(
        (res: any) => {
          for (let i = 0; i < res.data.length; i++) {
            this.vehicle_items.push(res.data[i]);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  getDriver() {
    this.driver_items = [];
    this.dropDowns.getDrivers(this.postBranchData).subscribe(
      (res: any) => {
        for (let i = 0; i < res.data.length; i++) {
          this.driver_items.push(res.data[i]);
        }
        console.log(res.data)
      },
      (error: any) => {
        this.toastService.presentToast('Network Issue.');
      }
    );
  }
  addGcToLdm() {

    console.log(this.postSortedGcData)
    this.postLdmGc.ldmno = this.postData.ldmno;
    this.postLdmGc.gcid = this.postSortedGcData.gcno;
    if (this.postLdmGc.ldmno) {
      this.dservice.addLdmGc(this.postLdmGc).subscribe(
        (res: any) => {
          if (res.data) {
            this.getGcById();
            this.toastService.presentToast('GC added.');
          } else {
            this.toastService.presentToast('Somthing wrong.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast('Somthing wrong.');
    }
  }

  deleteLdmGc(gcid) {
    this.postLdmGc.gcid = gcid;
    if (this.postLdmGc.gcid) {
      this.dservice.deleteLdmGc(this.postLdmGc).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.postData.weight = 0;
            this.postData.amount = 0;
            this.postData.qty = 0;

            this.getGcById();
            this.toastService.presentToast('GC removed.');
          } else {
            this.toastService.presentToast('Somthing wrong.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast('Somthing wrong.');
    }
  }
  ionViewWillEnter() {
    this.getLdmById();
    this.getGcById();
    this.getSortedGc();
  }


}
