import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ViewCompanyComponent } from './components/view-company/view-company.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view-company', component: ViewCompanyComponent },
  { path: 'add-company', component: AddCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

