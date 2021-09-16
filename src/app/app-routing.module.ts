import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },  { path: 'masters', loadChildren: './pages/masters/masters.module#MastersPageModule' },
  { path: 'booking-entry', loadChildren: './pages/booking-entry/booking-entry.module#BookingEntryPageModule' },
  { path: 'delivery-entry', loadChildren: './pages/delivery-entry/delivery-entry.module#DeliveryEntryPageModule' },
  { path: 'quote', loadChildren: './pages/quote/quote.module#QuotePageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'add-masters', loadChildren: './pages/add-masters/add-masters.module#AddMastersPageModule' },
  { path: 'edit-masters', loadChildren: './pages/edit-masters/edit-masters.module#EditMastersPageModule' },
  { path: 'add-managers', loadChildren: './pages/add-managers/add-managers.module#AddManagersPageModule' },
  { path: 'edit-managers', loadChildren: './pages/edit-managers/edit-managers.module#EditManagersPageModule' },
  { path: 'edit-vehicles', loadChildren: './pages/edit-vehicles/edit-vehicles.module#EditVehiclesPageModule' },
  { path: 'add-vehicles', loadChildren: './pages/add-vehicles/add-vehicles.module#AddVehiclesPageModule' },
  { path: 'add-account', loadChildren: './pages/add-account/add-account.module#AddAccountPageModule' },
  { path: 'edit-account', loadChildren: './pages/edit-account/edit-account.module#EditAccountPageModule' },
  { path: 'add-drivers', loadChildren: './pages/add-drivers/add-drivers.module#AddDriversPageModule' },
  { path: 'edit-drivers', loadChildren: './pages/edit-drivers/edit-drivers.module#EditDriversPageModule' },
  { path: 'add-branches', loadChildren: './pages/add-branches/add-branches.module#AddBranchesPageModule' },
  { path: 'edit-branches', loadChildren: './pages/edit-branches/edit-branches.module#EditBranchesPageModule' },
  { path: 'add-gc', loadChildren: './pages/add-gc/add-gc.module#AddGcPageModule' },
  { path: 'add-lcm', loadChildren: './pages/add-lcm/add-lcm.module#AddLcmPageModule' },
  { path: 'add-tlm', loadChildren: './pages/add-tlm/add-tlm.module#AddTlmPageModule' },
  { path: 'add-tur', loadChildren: './pages/add-tur/add-tur.module#AddTurPageModule' },
  { path: 'add-ldm', loadChildren: './pages/add-ldm/add-ldm.module#AddLdmPageModule' },
  { path: 'add-pod', loadChildren: './pages/add-pod/add-pod.module#AddPodPageModule' },
  { path: 'add-quote', loadChildren: './pages/add-quote/add-quote.module#AddQuotePageModule' },
  { path: 'add-bills', loadChildren: './pages/add-bills/add-bills.module#AddBillsPageModule' },
  { path: 'add-notes', loadChildren: './pages/add-notes/add-notes.module#AddNotesPageModule' },
  { path: 'all-branches', loadChildren: './pages/pages/all-branches/all-branches.module#AllBranchesPageModule' },
  { path: 'all-managers', loadChildren: './pages/pages/all-managers/all-managers.module#AllManagersPageModule' },
  { path: 'all-vehicles', loadChildren: './pages/pages/all-vehicles/all-vehicles.module#AllVehiclesPageModule' },
  { path: 'all-accounts', loadChildren: './pages/pages/all-accounts/all-accounts.module#AllAccountsPageModule' },
  { path: 'all-drivers', loadChildren: './pages/pages/all-drivers/all-drivers.module#AllDriversPageModule' },
  { path: 'all-gc', loadChildren: './pages/pages/all-gc/all-gc.module#AllGcPageModule' },
  { path: 'all-lcm', loadChildren: './pages/pages/all-lcm/all-lcm.module#AllLcmPageModule' },
  { path: 'all-tlm', loadChildren: './pages/pages/all-tlm/all-tlm.module#AllTlmPageModule' },
  { path: 'all-tur', loadChildren: './pages/pages/all-tur/all-tur.module#AllTurPageModule' },
  { path: 'all-ldm', loadChildren: './pages/pages/all-ldm/all-ldm.module#AllLdmPageModule' },
  { path: 'all-pod', loadChildren: './pages/pages/all-pod/all-pod.module#AllPodPageModule' },
  { path: 'edit-gc', loadChildren: './pages/edit-gc/edit-gc.module#EditGcPageModule' },
  { path: 'edit-lcm', loadChildren: './pages/edit-lcm/edit-lcm.module#EditLcmPageModule' },
  { path: 'edit-tlm', loadChildren: './pages/edit-tlm/edit-tlm.module#EditTlmPageModule' },
  { path: 'edit-tur', loadChildren: './pages/edit-tur/edit-tur.module#EditTurPageModule' },
  { path: 'edit-ldm', loadChildren: './pages/edit-ldm/edit-ldm.module#EditLdmPageModule' },
  { path: 'drivertrackmodal', loadChildren: './pages/drivertrackmodal/drivertrackmodal.module#DrivertrackmodalPageModule' },
  { path: 'add-mopmodal', loadChildren: './pages/add-mopmodal/add-mopmodal.module#AddMopmodalPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
