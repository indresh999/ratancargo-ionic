import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BookingentryService } from 'src/app/services/bookingentry.service';
import { DropdownsService } from 'src/app/services/dropdowns.service';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';
import { AddMopmodalPage } from '../add-mopmodal/add-mopmodal.page';

@Component({
  selector: 'app-edit-gc',
  templateUrl: './edit-gc.page.html',
  styleUrls: ['./edit-gc.page.scss'],
})
export class EditGcPage implements OnInit {

  public exp = 2;
  experiences: any = [];
  index = 1;
  postData = {
    id: '',
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
    ebill4: '',
    actualweight: '',
    chargeweight: '',
    totalf: '',
    doorcoll: '',
    doordelay: '',
    statecharge: '',
    unioncharges: '',
    godowncharges: '',
    codcharges: '',
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

  branch_items: any = [];
  consignee_items: any = [];
  consignor_items: any = [];
  mop_items: any = [];
  vehicle_items: any = [];

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
  postBranchData = {
    id: '1',
    gcno: '',
    name: '',
    pid: '1',
    limit: 30,
    mopId: ''
  }
  postMopData = {
    id: '',
    qty: '',
    mop: '',
    des: '',
    gcno: ''
  }
  constructor(private bookingservice: BookingentryService, private toastService: ToastService, private router: Router, private activatedroute: ActivatedRoute, private dropDowns: DropdownsService, private mService: MasterService, private modalCtrl: ModalController, private bService: BookingentryService) {
    this.experiences = [{ expId: 1 }]
  }

  ngOnInit() {
    this.postData.id = this.activatedroute.snapshot.paramMap.get('id');
    console.log(this.postData.id)
    this.getGcById();
    this.getBranches();
    this.getAccount();
    this.getVehicles();

  }

  getBranches() {
    if (this.postBranchData.id) {
      this.branch_items = [];
      this.mService.getBranchList(this.postBranchData).subscribe(
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
  updateGc() {
    if (this.postData.gcno && this.postData.totalamount > 0) {
      this.bookingservice.updateGc(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('Gc updated.');
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

  getGcById() {
    if (this.postData.id) {
      this.bookingservice.getGcById(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {

            this.postData.gcno = res.data.gcno;
            this.postData.date = res.data.date;
            this.postData.fbranch = res.data.fbranch;
            this.postData.tbranch = res.data.tbranch;
            this.postData.consignor = res.data.consignor;
            this.postData.consignee = res.data.consignee;
            this.postData.remark = res.data.remark;
            this.postData.invno = res.data.invno;
            this.postData.invvalue = res.data.invvalue;
            this.postData.loadtype = res.data.loadtype;
            this.postData.paytype = res.data.paytype;
            this.postData.billingparty = res.data.billingparty;
            this.postData.vehicle = res.data.vehicle;
            this.postData.cod = res.data.cod;
            this.postData.collat = res.data.collat;
            this.postData.colltype = res.data.colltype;
            this.postData.deliveryat = res.data.deliveryat;
            this.postData.deliverytype = res.data.deliverytype;
            this.postData.ebill1 = res.data.ebill1;
            this.postData.ebill2 = res.data.ebill2;
            this.postData.ebill3 = res.data.ebill3;
            this.postData.ebill4 = res.data.ebill4;
            this.postData.actualweight = res.data.actualweight;
            this.postData.chargeweight = res.data.chargeweight;
            this.postData.totalf = res.data.totalf;
            this.postData.doorcoll = res.data.doorcoll;
            this.postData.doordelay = res.data.doordelay;
            this.postData.statecharge = res.data.statecharge;
            this.postData.unioncharges = res.data.unioncharges;
            this.postData.godowncharges = res.data.godowncharges;
            this.postData.codcharges = res.data.codcharges;
            this.postData.hamali = res.data.hamali;
            this.postData.godownc = res.data.godownc;
            this.postData.codec = res.data.codec;
            this.postData.unionc = res.data.unionc;
            this.postData.otherc = res.data.otherc;
            this.postData.totalamount = res.data.totalamount;
            this.postData.createddtm = res.data.createddtm;
            this.postData.cnrid = res.data.cnrid;
            this.postData.cneid = res.data.cneid;
            this.postData.qty = res.data.qty;
            this.postBranchData.gcno = res.data.gcno;
            this.getAccountById(res.data.consignor, 0);
            this.getAccountById(res.data.consignee, 0);
            this.getGcMop();
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
  getAccountById(event, type) {
    if (type == 0) {
      this.postBranchData.id = event;
    }
    if (type == 1) {
      this.postBranchData.id = event.detail.value;
    }

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
  }
  getGcMop() {
    if (this.postBranchData.gcno) {

      this.bookingservice.getGcMop(this.postBranchData).subscribe(
        (res: any) => {
          for (let i = 0; i < res.data.length; i++) {
            this.experiences.push(res.data[i]);
            //     this.experiences.push({ expId: this.exp })
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

}
