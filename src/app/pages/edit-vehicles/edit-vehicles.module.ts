import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditVehiclesPage } from './edit-vehicles.page';

const routes: Routes = [
  {
    path: '',
    component: EditVehiclesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditVehiclesPage]
})
export class EditVehiclesPageModule {}
