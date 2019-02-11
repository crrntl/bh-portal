import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './ui/dashboard/dashboard.component';

import { ReservationsComponent } from './ui/reservations/reservations.component';
import { AccountComponent } from './ui/account/account.component';
import { UserComponent } from './ui/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReservationsComponent,
    AccountComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
