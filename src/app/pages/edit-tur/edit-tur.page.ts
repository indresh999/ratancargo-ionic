import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingentryService } from 'src/app/services/bookingentry.service';
import { DeliveryService } from 'src/app/services/delivery.service';
import { DropdownsService } from 'src/app/services/dropdowns.service';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-tur',
  templateUrl: './edit-tur.page.html',
  styleUrls: ['./edit-tur.page.scss'],
})
export class EditTurPage implements OnInit {
  postData = {
    turno: '',
    tdate: '',
    tbranch: '',
    fbranch: '',
    driver: '',
    vehicle: '',
    turpaytype: '',
    qty: 0,
    weight: 0,
    amount: 0,
    remark: '',
    owner: '',
    id: ''
  }

  postTurGc = {
    id: '1',
    gcid: '',
    turno: '',
    index: 0,
    nextNum: 0,
    type: ''
  }

  postSortedGcData = {
    id: '1',
    gcno: '',
    turno: '',
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

  updateTur() {
    if (this.postData.turno) {
      this.dservice.updateTur(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('Update TLM .');
            this.router.navigate(['home/booking-entry', { tab_name: 'turentry' }]);
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
  getTurById() {
    if (this.postData.id) {
      this.dservice.getTurById(this.postData).subscribe(
        (res: any) => {
          console.log(res.data)
          this.postData.turno = res.data.turno
          this.postData.tdate = res.data.tdate
          this.postData.tbranch = res.data.tbranch
          this.postData.fbranch = res.data.driver
          this.postData.driver = res.data.driver
          this.postData.vehicle = res.data.vehicle
          this.postData.turpaytype = res.data.turpaytype
          this.postData.qty = res.data.qty
          this.postData.weight = res.data.weight
          this.postData.amount = res.data.amount
          this.postData.remark = res.data.remark
          this.postData.owner = res.data.owner

          this.postSortedGcData.turno = res.data.turno;
          this.getGcById();
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  getGcById() {
    if (this.postSortedGcData.turno) {
      this.postData.weight = 0;
      this.postData.amount = 0;
      this.postData.qty = 0;

      this.gc_list_items = [];
      this.postSortedGcData.turno = this.postData.turno;
      this.postSortedGcData.id = this.postSortedGcData.gcno;

      this.dropDowns.getGcByIdTur(this.postSortedGcData).subscribe(
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
  addGcToTur() {

    console.log(this.postSortedGcData)
    this.postTurGc.turno = this.postData.turno;
    this.postTurGc.gcid = this.postSortedGcData.gcno;
    if (this.postTurGc.turno) {
      this.dservice.addTurGc(this.postTurGc).subscribe(
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

  deleteTurGc(gcid) {
    this.postTurGc.gcid = gcid;
    if (this.postTurGc.gcid) {
      this.dservice.deleteTurGc(this.postTurGc).subscribe(
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
    this.getTurById();
    this.getGcById();
    this.getSortedGc();
  }


}
