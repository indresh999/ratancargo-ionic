import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-entry',
  templateUrl: './delivery-entry.page.html',
  styleUrls: ['./delivery-entry.page.scss'],
})
export class DeliveryEntryPage implements OnInit {
  segmentModel: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.segmentModel = 'turentry';
  }
  addTur() {
    this.router.navigate(['home/add-tur']);
  }
  addLdm() {
    this.router.navigate(['home/add-ldm']);
  }
  addPod() {
    this.router.navigate(['home/add-pod']);
  }
  segmentChanged(event) {

  }
}
