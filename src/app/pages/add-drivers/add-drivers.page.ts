import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-drivers',
  templateUrl: './add-drivers.page.html',
  styleUrls: ['./add-drivers.page.scss'],
})
export class AddDriversPage implements OnInit {
  postData = {
    name: '',
    mobile: '',
    city: '',
    state: '',
    poliscestation: '',
    aadhar: '',
    ifscno: '',
    accountno: '',
    panno: '',
    licence: ''
  }
  constructor() { }

  ngOnInit() {
  }

}
