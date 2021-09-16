import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingentryService } from 'src/app/services/bookingentry.service';
import { DeliveryService } from 'src/app/services/delivery.service';
import { DropdownsService } from 'src/app/services/dropdowns.service';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-tur',
  templateUrl: './add-tur.page.html',
  styleUrls: ['./add-tur.page.scss'],
})
export class AddTurPage implements OnInit {
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
    owner: ''
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
  gc_list_items: any = [];


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
  postSortedGcData = {
    id: '1',
    gcno: '',
    turno: '',
    name: '',
    pid: '1',
    limit: 30
  }
  constructor(private toastService: ToastService, private router: Router, private dService: DeliveryService, private mSerivce: MasterService, private dropDowns: DropdownsService) {
  }

  ngOnInit() {


  }

  addTur() {
    if (this.postData.turno) {
      this.dService.createTur(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('New tur created.');
            this.router.navigate(['home/delivery-entry', { tab_name: 'turentry' }]);
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

  /**Gc code  */

  postturGc = {
    id: '1',
    gcid: '',
    turno: '',
    index: 0,
    nextNum: 0,
    type: ''
  }


  getSortedGc() {
    if (this.postBranchData.id) {
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
  getVehicles() {
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
  getGcById() {
    console.log(this.postSortedGcData.gcno)
    if (this.postSortedGcData.gcno) {
      this.gc_list_items = [];
      this.postSortedGcData.turno = this.postData.turno;
      this.dropDowns.getGcByIdTur(this.postSortedGcData).subscribe(
        (res: any) => {
          for (let i = 0; i < res.data.length; i++) {
            this.gc_list_items.push(res.data[i]);

            this.postData.weight += parseFloat(res.data[i].actualweight);
            this.postData.amount += parseFloat(res.data[i].totalamount);
            this.postData.qty += parseFloat(res.data[i].qty);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }

  addGcToTur() {
    console.log(this.postSortedGcData)
    this.postturGc.turno = this.postData.turno;
    this.postturGc.gcid = this.postSortedGcData.gcno;
    if (this.postturGc.turno) {
      this.dService.addTurGc(this.postturGc).subscribe(
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
    this.postturGc.gcid = gcid;
    if (this.postturGc.gcid) {
      this.dService.deleteTurGc(this.postturGc).subscribe(
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

  getNextNumber(type) {
    this.postturGc.type = type;
    this.dropDowns.getNextNum(this.postturGc).subscribe(
      (res: any) => {
        this.postturGc.nextNum = res.data.nextid;
        console.log(res.data.nextid)
        console.log(res.data)
        ++this.postturGc.nextNum;
        this.postData.turno = 'TUR' + this.postturGc.nextNum;
      },
      (error: any) => {
        this.toastService.presentToast('Network Issue.');
      }
    );
  }
  /*
  generateNumber(type) {
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    var newNumber = zeroPad(100, 4);
    this.postData.turno = type + newNumber;
  }
  */
  ionViewWillEnter() {
    this.getNextNumber(4);
    this.getBranches();
    this.getVehicles();
    this.getDriver();
    this.getSortedGc();
  }
}
