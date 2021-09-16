import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddMopmodalPage } from './add-mopmodal.page';

const routes: Routes = [
  {
    path: '',
    component: AddMopmodalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddMopmodalPage]
})
export class AddMopmodalPageModule {}
