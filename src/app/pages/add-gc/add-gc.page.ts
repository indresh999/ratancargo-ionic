import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-gc',
  templateUrl: './add-gc.page.html',
  styleUrls: ['./add-gc.page.scss'],
})
export class AddGcPage implements OnInit {

  postData = {
    gcno: '',
    invoiceno: '',
    invoicevalue: '',
    loadtype: '',
    paytype: '',
    billingparty: '',
    vehicle: '',
    codamount: '',
    colltype: '',
    collat: '',
    deliverytype: '',
    deliveryat: '',
    actualweight: '',
    chargeweight: '',
    ewaybill1: '',
    ewaybill2: '',
    ewaybill3: '',
    totalfrieght: '',
    doorcoll: '',
    doorday: '',
    statecharges: '',
    hamali: '',
    godowncharges: '',
    codcharges: '',
    unioncharges: '',
    othercharges: '',
    totalamount: '',
    remark: '',
  }
  constructor() { }

  ngOnInit() {
  }

}
