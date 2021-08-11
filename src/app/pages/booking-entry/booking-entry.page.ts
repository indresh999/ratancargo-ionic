import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-entry',
  templateUrl: './booking-entry.page.html',
  styleUrls: ['./booking-entry.page.scss'],
})
export class BookingEntryPage implements OnInit {
  segmentModel: string;
  postData = {

  }
  constructor(private router: Router) { }

  ngOnInit() {
    this.segmentModel = 'gcentry';
  }
  addGc() {
    this.router.navigate(['home/add-gc']);
  }
  addLcm() {
    this.router.navigate(['home/add-lcm']);
  }
  addTlm() {
    this.router.navigate(['home/add-tlm']);
  }
  segmentChanged(event) {

  }

}
