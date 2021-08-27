import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.page.html',
  styleUrls: ['./add-vehicles.page.scss'],
})
export class AddVehiclesPage implements OnInit {
  postData = {
    vehiclename: '',
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
  data: any;
  constructor(private mSerivce: MasterService, private toastService: ToastService, private router: Router) { }

  ngOnInit() {
  }

  savevehicle() {

    if (this.postData.vehiclename) {
      this.mSerivce.createVehicle(this.postData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('New vehicle added.');
            this.router.navigate(['home/masters', { tab_name: 'vehicles' }]);
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
        'Please valid details.'
      );
    }
  }
  ionViewWillEnter() {

  }
}

