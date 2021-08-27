import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

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
    address: '',
    state: '',
    poliscestation: '',
    bankname: '',
    aadharno: '',
    ifscno: '',
    accountno: '',
    panno: '',
    licence: ''
  }

  data: any;
  constructor(private mSerivce: MasterService, private toastService: ToastService, private router: Router) { }

  ngOnInit() {
  }

  savedriver() {

    if (this.postData.name) {
      this.mSerivce.createDriver(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('New driver added.');
            this.router.navigate(['home/masters', { tab_name: 'drivers' }]);
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

  }
}

