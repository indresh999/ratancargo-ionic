import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-managers',
  templateUrl: './add-managers.page.html',
  styleUrls: ['./add-managers.page.scss'],
})
export class AddManagersPage implements OnInit {
  postData = {
    id: '',
    name: '',
    branch: '',
    mobile: '',
    manager: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    password: ''
  }
  postBranchData = {
    id: '1',
    name: '',
    pid: '1',
    limit: 30
  }

  data: any;
  branch_items: any = [];
  constructor(private mSerivce: MasterService, private toastService: ToastService, private router: Router) { }

  ngOnInit() {
    this.getBranches();
  }

  savemanager() {

    if (this.postData.name) {
      this.mSerivce.createManager(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('New manager added.');
            this.router.navigate(['home/masters', { tab_name: 'managers' }]);
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

  ionViewWillEnter() {

    this.postData.name = '',
      this.postData.branch = '',
      this.postData.mobile = '',
      this.postData.manager = '',
      this.postData.area = '',
      this.postData.city = '',
      this.postData.state = '',
      this.postData.pincode = '',
      this.postData.password = ''
  }
}

