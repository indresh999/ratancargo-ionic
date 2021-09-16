import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingentryService } from 'src/app/services/bookingentry.service';
import { DropdownsService } from 'src/app/services/dropdowns.service';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-lcm',
  templateUrl: './edit-lcm.page.html',
  styleUrls: ['./edit-lcm.page.scss'],
})
export class EditLcmPage implements OnInit {
  postData = {
    id: '',
    lcmno: '',
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

  postBranchData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 30
  }

  data: any;
  branch_items: any = [];

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

  constructor(private toastService: ToastService, private router: Router, private bService: BookingentryService, private mSerivce: MasterService, private dropDowns: DropdownsService, private activatedroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.postData.id = this.activatedroute.snapshot.paramMap.get('id');
    console.log(this.postData.id)
    this.getBranches();
    this.getSortedGc();
  }

  updateLcm() {
    if (this.postData.lcmno) {
      this.bService.updateLcm(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('Update LCM .');
            this.router.navigate(['home/booking-entry', { tab_name: 'lcmentry' }]);
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
    lcmno: '',
    name: '',
    pid: '1',
    limit: 30
  }

  postLcmGc = {
    id: '1',
    gcid: '',
    lcmno: '',
    index: 0,
    nextNum: 0,
    type: ''
  }
  totalWeight = 0;
  totalAmount = 0;
  totalQty = 0;
  gc_items: any = [];
  gc_list_items: any = [];


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
  getGcById() {
    console.log(this.postSortedGcData)
    if (this.postSortedGcData.lcmno) {
      this.gc_list_items = [];
      this.dropDowns.getGcById(this.postSortedGcData).subscribe(
        (res: any) => {
          console.log(res.data)
          for (let i = 0; i < res.data.length; i++) {
            this.gc_list_items.push(res.data[i]);
            this.postData.qty += parseFloat(res.data[i].qty);
            this.postData.amount += parseFloat(res.data[i].totalamount);
            this.postData.weight += parseFloat(res.data[i].actualweight);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }

  addGcToLcm() {

    console.log(this.postSortedGcData)
    this.postLcmGc.lcmno = this.postData.lcmno;
    this.postLcmGc.gcid = this.postSortedGcData.gcno;
    if (this.postLcmGc.gcid) {
      this.bService.addLcmGc(this.postLcmGc).subscribe(
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
      this.toastService.presentToast('Please Select GC.');
    }
  }
  deleteLcmGc(gcid) {
    this.postLcmGc.gcid = gcid;
    if (this.postLcmGc.gcid) {
      this.bService.deleteLcmGc(this.postLcmGc).subscribe(
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
    this.postLcmGc.type = type;
    this.dropDowns.getNextNum(this.postLcmGc).subscribe(
      (res: any) => {
        this.postLcmGc.nextNum = res.data.nextid;
        console.log(res.data.nextid)
        console.log(res.data)
        ++this.postLcmGc.nextNum;
        this.postData.lcmno = 'LCM' + this.postLcmGc.nextNum;
      },
      (error: any) => {
        this.toastService.presentToast('Network Issue.');
      }
    );
  }
  ionViewWillEnter() {
    this.getLcmById();
  }
  /*gc code end*/

  /*Get LCM code*/
  getdata = [];
  getLcmById() {
    if (this.postData.id) {
      this.bService.getLcmById(this.postData).subscribe(
        (res: any) => {
          this.postData.lcmno = res.data.lcmno;
          this.postData.date = res.data.date;
          this.postData.area = res.data.area;
          this.postData.branch = res.data.branch;
          this.postData.vehicle = res.data.vehicle;
          this.postData.driver = res.data.driver;
          this.postData.supervisor = res.data.supervisor;
          this.postData.loader = res.data.loader;
          this.postData.remark = res.data.remark;
          /*
          this.postData.weight = res.data.weight;
          this.postData.amount = res.data.amount;
          this.postData.qty = res.data.qty;
*/
          this.postSortedGcData.lcmno = res.data.lcmno;
          this.getGcById();
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }

  /**End Get LCM code */
}
