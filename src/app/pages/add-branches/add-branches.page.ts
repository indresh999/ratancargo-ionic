import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-branches',
  templateUrl: './add-branches.page.html',
  styleUrls: ['./add-branches.page.scss'],
})
export class AddBranchesPage implements OnInit {
  postData = {
    branchcode: '',
    branchname: '',
    branchadd: '',
    city: '',
    state: '',
    pin: '',
    bankname: '',
    accountno: '',
    gstno: ''
  }
  constructor() { }

  ngOnInit() {
  }

}
