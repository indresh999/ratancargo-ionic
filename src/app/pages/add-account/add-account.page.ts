import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.page.html',
  styleUrls: ['./add-account.page.scss'],
})
export class AddAccountPage implements OnInit {
  postData = {
    bankname: '',
    ifscno: '',
    accountno: '',
    gstno: '',
    panno: '',
    tinno: ''
  }
  constructor() { }

  ngOnInit() {
  }

}
