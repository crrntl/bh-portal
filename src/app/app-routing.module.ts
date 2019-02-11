import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { ReservationsComponent } from './ui/reservations/reservations.component';
import { UserComponent } from './ui/user/user.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
