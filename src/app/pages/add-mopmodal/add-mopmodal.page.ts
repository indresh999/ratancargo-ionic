import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { BookingentryService } from 'src/app/services/bookingentry.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-mopmodal',
  templateUrl: './add-mopmodal.page.html',
  styleUrls: ['./add-mopmodal.page.scss'],
})

export class AddMopmodalPage implements OnInit {

  postMopData = {
    gcno: '',
    qty: 0,
    mop: 0,
    des: 0
  }

  constructor(private bservice: BookingentryService, private modalCtrl: ModalController, private toastService: ToastService, private navParams: NavParams) { }

  ngOnInit() {
    this.postMopData.gcno = this.navParams.get('gcno');
  }

  addMop() {
    if (this.postMopData.qty) {
      this.bservice.addMop(this.postMopData).subscribe(
        (res: any) => {
          console.log(res)
          if (res.data) {
            this.toastService.presentToast('M.O.P added.');
            this.postMopData.mop = 0;
            this.postMopData.qty = 0;
            this.postMopData.des = 0;
            //    this.modalCtrl.dismiss();
          } else {
            this.toastService.presentToast('Somthing wrong.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
