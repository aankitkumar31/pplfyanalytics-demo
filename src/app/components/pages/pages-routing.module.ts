import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch: 'full' 
  },
  { path: 'dashboard', component: DashboardComponent },
];

export const PagesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

