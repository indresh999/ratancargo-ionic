import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingentryService } from 'src/app/services/bookingentry.service';
import { DropdownsService } from 'src/app/services/dropdowns.service';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-tlm',
  templateUrl: './add-tlm.page.html',
  styleUrls: ['./add-tlm.page.scss'],
})
export class AddTlmPage implements OnInit {
  postData = {
    tlmno: '',
    tdate: '',
    fbranch: '',
    tbranch: '',
    driver: '',
    owner: '',
    vehicle: '',
    actual: '',
    paidw: '',
    package: '',
    hire: '',
    otherc: '',
    advance: '',
    balance: '',
    totalcharges: 0,
    remark: '',
    qty: 0,
    weight: 0,
    amount: 0

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

  constructor(private toastService: ToastService, private router: Router, private bService: BookingentryService, private mSerivce: MasterService, private dropDowns: DropdownsService) {
  }

  ngOnInit() {

  }

  addTlm() {
    if (this.postData.tlmno) {
      this.bService.createTlm(this.postData).subscribe(
        (res: any) => {
          if (res.data) {
            this.toastService.presentToast('New TLM created.');
            this.router.navigate(['home/booking-entry', { tab_name: 'tlmentry' }]);
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

  postSortedGcData = {
    id: '1',
    gcno: '',
    tlmno: '',
    name: '',
    pid: '1',
    limit: 30
  }

  postTlmGc = {
    id: '1',
    gcid: '',
    tlmno: '',
    index: 0,
    nextNum: 0,
    type: ''
  }
  totalWeight = 0;
  totalAmount = 0;
  totalQty = 0;
  gc_list_items: any = [];

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
  getGcById() {
    if (this.postSortedGcData.gcno) {
      this.gc_list_items = [];
      this.postSortedGcData.tlmno = this.postData.tlmno;
      this.postSortedGcData.id = this.postSortedGcData.gcno;
      console.log("abcd")
      this.dropDowns.getGcByIdTlm(this.postSortedGcData).subscribe(
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

  addGcToTlm() {

    console.log(this.postSortedGcData)
    this.postTlmGc.tlmno = this.postData.tlmno;
    this.postTlmGc.gcid = this.postSortedGcData.gcno;
    if (this.postTlmGc.tlmno) {
      this.bService.addTlmGc(this.postTlmGc).subscribe(
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

  getNextNumber(type) {
    this.postTlmGc.type = type;
    this.dropDowns.getNextNum(this.postTlmGc).subscribe(
      (res: any) => {
        this.postTlmGc.nextNum = res.data.nextid;
        console.log(res.data.nextid)
        console.log(res.data)
        ++this.postTlmGc.nextNum;
        this.postData.tlmno = 'TLM' + this.postTlmGc.nextNum;
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

  deleteTlmGc(gcid) {
    this.postTlmGc.gcid = gcid;
    if (this.postTlmGc.gcid) {
      this.bService.deleteTlmGc(this.postTlmGc).subscribe(
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
  /*
  generateNumber(type) {
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    var newNumber = zeroPad(100, 4);
    this.postData.tlmno = type + newNumber;
  }
  */
  ionViewWillEnter() {
    this.getNextNumber(3);
    this.getBranches();
    this.getSortedGc();
    this.getVehicles();
    this.getDriver();
  }
}
