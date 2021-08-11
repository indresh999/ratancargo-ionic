import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.page.html',
  styleUrls: ['./masters.page.scss'],
})
export class MastersPage implements OnInit {
  segmentModel: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.segmentModel = 'branches';
  }
  addBranch() {
    this.router.navigate(['home/add-branches']);
  }
  addManager() {
    this.router.navigate(['home/add-managers']);
  }
  addVehicle() {
    this.router.navigate(['home/add-vehicles']);
  }
  addAccount() {
    this.router.navigate(['home/add-accounts']);
  }
  addDriver() {
    this.router.navigate(['home/add-drivers']);
  }
  segmentChanged(event) {

  }
}
