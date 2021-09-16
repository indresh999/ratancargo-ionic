import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DrivertrackmodalPage } from './drivertrackmodal.page';

const routes: Routes = [
  {
    path: '',
    component: DrivertrackmodalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DrivertrackmodalPage]
})
export class DrivertrackmodalPageModule {}
