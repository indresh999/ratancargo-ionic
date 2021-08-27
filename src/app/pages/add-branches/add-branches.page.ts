import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-branches',
  templateUrl: './add-branches.page.html',
  styleUrls: ['./add-branches.page.scss'],
})
export class AddBranchesPage implements OnInit {
  postData = {
    code: '',
    name: '',
    address: '',
    city: '',
    state: '',
    bankname: '',
    ifsc: '',
    accountno: '',
    gstno: ''
  }

  data: any;
  branch_items: any = [];
  constructor(private mSerivce: MasterService, private toastService: ToastService, private router: Router) { }

  ngOnInit() {

  }
  validateInputs() {
    let branchname = this.postData.code.trim();
    let branchcode = this.postData.name.trim();
    return (
      this.postData.code &&
      this.postData.name &&
      branchname.length > 0 &&
      branchcode.length > 0
    );
  }

  saveBranch() {

    if (this.validateInputs()) {
      this.mSerivce.createBranch(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('New branch added.');
            this.router.navigate(['home/masters', { tab_name: 'branches' }]);
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

  ionViewWillEnter() {
    this.postData.code = '',
      this.postData.name = '',
      this.postData.address = '',
      this.postData.city = '',
      this.postData.state = '',
      this.postData.bankname = '',
      this.postData.ifsc = '',
      this.postData.accountno = '',
      this.postData.gstno = ''
  }
}

