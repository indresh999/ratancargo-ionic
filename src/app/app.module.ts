import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMopmodalPageModule } from './pages/add-mopmodal/add-mopmodal.module';
import { DrivertrackmodalPageModule } from './pages/drivertrackmodal/drivertrackmodal.module';
import { EditAccountPageModule } from './pages/edit-account/edit-account.module';
import { EditBranchesPageModule } from './pages/edit-branches/edit-branches.module';
import { EditDriversPageModule } from './pages/edit-drivers/edit-drivers.module';
import { EditManagersPageModule } from './pages/edit-managers/edit-managers.module';
import { EditVehiclesPageModule } from './pages/edit-vehicles/edit-vehicles.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    EditBranchesPageModule,
    EditDriversPageModule,
    EditVehiclesPageModule,
    EditManagersPageModule,
    EditAccountPageModule,
    DrivertrackmodalPageModule,
    AddMopmodalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
