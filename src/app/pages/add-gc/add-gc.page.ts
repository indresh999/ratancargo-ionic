import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BookingentryService } from 'src/app/services/bookingentry.service';
import { DropdownsService } from 'src/app/services/dropdowns.service';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';
import { AddMopmodalPage } from '../add-mopmodal/add-mopmodal.page';

@Component({
  selector: 'app-add-gc',
  templateUrl: './add-gc.page.html',
  styleUrls: ['./add-gc.page.scss'],
})
export class AddGcPage implements OnInit {

  public exp = 1;
  public index = 0;
  experiences: any = [];

  postGc = {
    id: '1',
    gcid: '',
    gcno: '',
    index: 0,
    nextNum: 0,
    type: ''
  }


  postData = {
    gcno: '',
    date: '',
    fbranch: '',
    tbranch: '',
    consignor: '',
    consignee: '',
    remark: '',
    invno: '',
    invvalue: '',
    loadtype: '',
    paytype: '',
    billingparty: '',
    vehicle: '',
    cod: '',
    collat: '',
    colltype: '',
    deliveryat: '',
    deliverytype: '',
    ebill1: '',
    ebill2: '',
    ebill3: '',
    actualweight: '',
    chargeweight: '',
    totalf: '',
    doorcoll: '',
    doordelay: '',
    statecharge: '',
    hamali: '',
    godownc: '',
    codec: '',
    unionc: '',
    otherc: '',
    totalamount: 0,
    createddtm: '',
    cnrid: '',
    cneid: '',
    qty: 0,
    mop: this.experiences
  }
  postBranchData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 30,
    gcno: ''
  }
  postMopData = {
    id: '',
    qty: '',
    mop: '',
    des: '',
    gcno: ''
  }

  data: any;
  branch_items: any = [];
  vehicle_items: any = [];
  consignee_items: any = [];
  consignor_items: any = [];
  mop_items: any = [];
  consignee_data = {
    id: '',
    account_type: '',
    name: '',
    mobile: '',
    city: '',
    state: '',
    address: '',
    gst: ''
  }
  consignor_data = {
    id: '',
    account_type: '',
    name: '',
    mobile: '',
    city: '',
    state: '',
    address: '',
    gst: ''
  }

  ngOnInit() {

  }

  constructor(private toastService: ToastService, private router: Router, private bService: BookingentryService, private mSerivce: MasterService, private dropDowns: DropdownsService, private modalCtrl: ModalController) {
    this.experiences = [{ expId: 1 }]
  }

  addgc() {

    if (this.postData.gcno && this.postData.totalamount > 0) {
      this.postData.mop = this.experiences;
      this.bService.createGc(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('New GC created.');
            this.router.navigate(['home/booking-entry', { tab_name: 'gcentry' }]);
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
        'Please fill all values.'
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
  getAccount() {
    this.consignee_items = [];
    this.consignor_items = [];
    if (this.postBranchData.id) {
      this.dropDowns.getAccounts(this.postBranchData).subscribe(
        (res: any) => {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].accounttype == 'consignee') {
              this.consignee_items.push(res.data[i]);
            }
            if (res.data[i].accounttype == 'consignor') {
              this.consignor_items.push(res.data[i]);
            }
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }

  getAccountById(event) {
    if (event.detail.value) {
      this.postBranchData.id = event.detail.value;
      this.dropDowns.getAccountById(this.postBranchData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            if (res.data.accounttype == 'consignee') {
              this.consignee_data.id = res.data.id;
              this.consignee_data.account_type = res.data.accounttype;
              this.consignee_data.name = res.data.name;
              this.consignee_data.mobile = res.data.mobile;
              this.consignee_data.city = res.data.city;
              this.consignee_data.state = res.data.state;
              this.consignee_data.address = res.data.address1;
              this.consignee_data.gst = res.data.gst;
            }
            if (res.data.accounttype == 'consignor') {
              this.consignor_data.id = res.data.id;
              this.consignor_data.account_type = res.data.accounttype;
              this.consignor_data.name = res.data.name;
              this.consignor_data.mobile = res.data.mobile;
              this.consignor_data.address = res.data.address1;
              this.consignor_data.city = res.data.city;
              this.consignor_data.state = res.data.state;
              this.consignor_data.gst = res.data.gst;
            }
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
  getNextNumber(type) {
    this.postGc.type = type;
    this.dropDowns.getNextNum(this.postGc).subscribe(
      (res: any) => {
        this.postGc.nextNum = res.data.nextid;
        ++this.postGc.nextNum;
        this.postData.gcno = 'GC' + this.postGc.nextNum;
      },
      (error: any) => {
        this.toastService.presentToast('Network Issue.');
      }
    );
  }
  ionViewWillEnter() {
    this.postData.date = '',
      this.postData.fbranch = '',
      this.postData.tbranch = '',
      this.postData.consignor = '',
      this.postData.consignee = '',
      this.postData.remark = '',
      this.postData.invno = '',
      this.postData.invvalue = '',
      this.postData.loadtype = '',
      this.postData.paytype = '',
      this.postData.billingparty = '',
      this.postData.vehicle = '',
      this.postData.cod = '',
      this.postData.collat = '',
      this.postData.colltype = '',
      this.postData.deliveryat = '',
      this.postData.deliverytype = '',
      this.postData.ebill1 = '',
      this.postData.ebill2 = '',
      this.postData.ebill3 = '',
      this.postData.actualweight = '',
      this.postData.chargeweight = '',
      this.postData.totalf = '',
      this.postData.doorcoll = '',
      this.postData.doordelay = '',
      this.postData.statecharge = '',
      this.postData.hamali = '',
      this.postData.godownc = '',
      this.postData.codec = '',
      this.postData.unionc = '',
      this.postData.otherc = '',
      this.postData.totalamount = 0,
      this.postData.createddtm = '',
      this.postData.cnrid = '',
      this.postData.cneid = '',
      this.postData.qty = 0

    this.getBranches();
    this.getVehicles();
    this.getAccount();
    this.getNextNumber(1);
  }
  addNewAccount() {
    this.router.navigate(['home/add-accounts']);
  }
  changeBillingParty(event) {
    var val = event.detail.value;
    if (val == "To Pay") {
      this.postData.billingparty = this.postData.consignee;
    }
    if (val == "Paid") {
      this.postData.billingparty = this.postData.consignor;
    }
    if (val == "TBB") {
      this.postData.billingparty = "";
    }
  }

  getMop() {
    this.mop_items = [];
    this.postData.qty = 0;
    console.log(this.postBranchData)
    this.postBranchData.gcno = this.postData.gcno;
    if (this.postBranchData.gcno) {
      this.bService.getGcMop(this.postBranchData).subscribe(
        (res: any) => {
          console.log(res.data)
          for (let i = 0; i < res.data.length; i++) {
            this.mop_items.push(res.data[i]);
            this.postData.qty += parseFloat(res.data[i].qty);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }

  async presentMopModal() {
    const modal = await this.modalCtrl.create({
      component: AddMopmodalPage,
      // cssClass: 'service-half-modal',
      componentProps: {
        'gcno': this.postData.gcno
      }
    });
    modal.onDidDismiss()
      .then((data) => {
        this.getMop();
      });
    return await modal.present();
  }
  deleteMop(id) {
    this.postMopData.id = id
    if (this.postMopData.id) {
      this.bService.deleteMop(this.postMopData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('M.O.P deleted.');
            this.getMop();
          } else {
            this.toastService.presentToast('Somthing wrong.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  sumCharges() {
    this.postData.totalamount = parseFloat(this.postData.totalf) + parseFloat(this.postData.doorcoll) + parseFloat(this.postData.doordelay) + parseFloat(this.postData.statecharge) + parseFloat(this.postData.hamali) + parseFloat(this.postData.godownc) + parseFloat(this.postData.codec) + parseFloat(this.postData.unionc) + parseFloat(this.postData.otherc);
  }
}

