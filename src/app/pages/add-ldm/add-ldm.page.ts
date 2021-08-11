import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-ldm',
  templateUrl: './add-ldm.page.html',
  styleUrls: ['./add-ldm.page.scss'],
})
export class AddLdmPage implements OnInit {
  postData = {
    branches: '',
    drivers: '',
    area: '',
    supervisor: '',
    loader: '',
    selectgc: '',
    remark: '',
  }
  constructor() { }

  ngOnInit() {
  }

}
