import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-managers',
  templateUrl: './add-managers.page.html',
  styleUrls: ['./add-managers.page.scss'],
})
export class AddManagersPage implements OnInit {
  postData =
    {
      name: '',
      mobile: '',
      city: '',
      area: '',
      pin: '',
      pass: '',
      idproof: '',
      photo: ''
    }
  constructor() { }

  ngOnInit() {
  }

}
