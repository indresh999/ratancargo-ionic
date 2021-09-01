import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/user-data.resolver';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'booking-entry',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/booking-entry/booking-entry.module').then(
                m => m.BookingEntryPageModule
              )
          }
        ]
      },
      {
        path: 'masters',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/masters/masters.module').then(
                m => m.MastersPageModule
              )
          }
        ]
      },
      {
        path: 'delivery-entry',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/delivery-entry/delivery-entry.module').then(
                m => m.DeliveryEntryPageModule
              )
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/settings/settings.module').then(
                m => m.SettingsPageModule
              )
          }
        ]
      },
      {
        path: 'add-branches',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-branches/add-branches.module').then(
                m => m.AddBranchesPageModule
              )
          }
        ]
      },
      {
        path: 'add-managers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-managers/add-managers.module').then(
                m => m.AddManagersPageModule
              )
          }
        ]
      },
      {
        path: 'add-vehicles',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-vehicles/add-vehicles.module').then(
                m => m.AddVehiclesPageModule
              )
          }
        ]
      },
      {
        path: 'add-accounts',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-account/add-account.module').then(
                m => m.AddAccountPageModule
              )
          }
        ]
      },
      {
        path: 'add-drivers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-drivers/add-drivers.module').then(
                m => m.AddDriversPageModule
              )
          }
        ]
      },
      {
        path: 'add-gc',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-gc/add-gc.module').then(
                m => m.AddGcPageModule
              )
          }
        ]
      },
      {
        path: 'add-lcm',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-lcm/add-lcm.module').then(
                m => m.AddLcmPageModule
              )
          }
        ]
      },
      {
        path: 'add-tlm',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-tlm/add-tlm.module').then(
                m => m.AddTlmPageModule
              )
          }
        ]
      },
      {
        path: 'add-tur',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-tur/add-tur.module').then(
                m => m.AddTurPageModule
              )
          }
        ]
      },
      {
        path: 'add-ldm',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-ldm/add-ldm.module').then(
                m => m.AddLdmPageModule
              )
          }
        ]
      },
      {
        path: 'add-pod',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-pod/add-pod.module').then(
                m => m.AddPodPageModule
              )
          }
        ]
      },
      {
        path: 'add-quote',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-quote/add-quote.module').then(
                m => m.AddQuotePageModule
              )
          }
        ]
      },
      {
        path: 'add-bills',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-bills/add-bills.module').then(
                m => m.AddBillsPageModule
              )
          }
        ]
      },
      {
        path: 'add-notes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-notes/add-notes.module').then(
                m => m.AddNotesPageModule
              )
          }
        ]
      },
      {
        path: 'edit-gc',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/edit-gc/edit-gc.module').then(
                m => m.EditGcPageModule
              )
          }
        ]
      },
      {
        path: 'edit-lcm',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/edit-lcm/edit-lcm.module').then(
                m => m.EditLcmPageModule
              )
          }
        ]
      },
      {
        path: 'edit-tlm',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/edit-tlm/edit-tlm.module').then(
                m => m.EditTlmPageModule
              )
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouter { }
