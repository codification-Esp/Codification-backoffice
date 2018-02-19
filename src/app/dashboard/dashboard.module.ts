import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from "./dashboard.routing";
import { GestionPavillonComponent } from './gestion-pavillon/gestion-pavillon.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { PavillonFormComponent } from './pavillon-form/pavillon-form.component';
import { GestionCodificationComponent } from './gestion-codification/gestion-codification.component';
import { GestionReservationComponent } from './gestion-reservation/gestion-reservation.component';
import { DetailsPavillonComponent } from './gestion-pavillon/details-pavillon/details-pavillon.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    GestionPavillonComponent,
    HomeDashboardComponent,
    PavillonFormComponent,
    GestionCodificationComponent,
    GestionReservationComponent,
    DetailsPavillonComponent
  ]
})
export class DashboardModule { }
