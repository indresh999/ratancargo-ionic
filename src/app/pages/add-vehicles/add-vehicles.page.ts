import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.page.html',
  styleUrls: ['./add-vehicles.page.scss'],
})
export class AddVehiclesPage implements OnInit {
  postData = {
    vehicleno: '',
    regno: '',
    engineno: '',
    chassisno: '',
    puc: '',
    type: '',
    loadcapacity: '',
    ownername: '',
    address: '',
    permitno: '',
    financecompany: '',
    insurancecompany: '',
    insurancerenewdate: ''


  }
  constructor() { }

  ngOnInit() {
  }

}
