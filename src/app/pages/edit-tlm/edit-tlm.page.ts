import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingentryService } from 'src/app/services/bookingentry.service';
import { DropdownsService } from 'src/app/services/dropdowns.service';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-tlm',
  templateUrl: './edit-tlm.page.html',
  styleUrls: ['./edit-tlm.page.scss'],
})
export class EditTlmPage implements OnInit {
  postData = {
    id: '',
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

  postTlmGc = {
    id: '1',
    gcid: '',
    tlmno: '',
    index: 0,
    nextNum: 0,
    type: ''
  }

  postSortedGcData = {
    id: '1',
    gcno: '',
    tlmno: '',
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
  constructor(private toastService: ToastService, private router: Router, private bService: BookingentryService, private mSerivce: MasterService, private dropDowns: DropdownsService, private activatedroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.postData.id = this.activatedroute.snapshot.paramMap.get('id');
    this.getBranches();
    this.getVehicles();
    this.getDriver();

  }

  updateTlm() {
    if (this.postData.tlmno) {
      this.bService.updateTlm(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('Update TLM .');
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
  getTlmById() {
    if (this.postData.id) {
      this.bService.getTlmById(this.postData).subscribe(
        (res: any) => {
          console.log(res.data)
          this.postData.tlmno = res.data.tlmno;
          this.postData.tdate = res.data.tdate;
          this.postData.fbranch = res.data.fbranch;
          this.postData.tbranch = res.data.tbranch;
          this.postData.driver = res.data.driver;
          this.postData.owner = res.data.owner;
          this.postData.vehicle = res.data.vehicle;
          this.postData.actual = res.data.actual;
          this.postData.paidw = res.data.paidw;
          this.postData.package = res.data.package;
          this.postData.hire = res.data.hire;
          this.postData.otherc = res.data.otherc;
          this.postData.advance = res.data.advance;
          this.postData.balance = res.data.balance;
          this.postData.totalcharges = res.data.totalcharges;
          this.postData.remark = res.data.remark;
          this.postData.qty = res.data.qty;
          this.postData.weight = res.data.weight;
          this.postData.amount = res.data.amount;

          this.postSortedGcData.tlmno = res.data.tlmno;
          this.getGcById();
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  getGcById() {
    if (this.postSortedGcData.tlmno) {
      this.postData.weight = 0;
      this.postData.amount = 0;
      this.postData.qty = 0;

      this.gc_list_items = [];
      this.postSortedGcData.tlmno = this.postData.tlmno;
      this.postSortedGcData.id = this.postSortedGcData.gcno;

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
  ionViewWillEnter() {
    this.getTlmById();
    this.getGcById();
    this.getSortedGc();
  }


}
