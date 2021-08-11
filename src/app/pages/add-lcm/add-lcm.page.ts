import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-lcm',
  templateUrl: './add-lcm.page.html',
  styleUrls: ['./add-lcm.page.scss'],
})
export class AddLcmPage implements OnInit {
  postData = {
    branches: '',
    drivers: '',
    area: '',
    supervisor: '',
    loader: '',
  }
  constructor() { }

  ngOnInit() {
  }

}
