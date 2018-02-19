import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { GestionPavillonComponent } from './gestion-pavillon/gestion-pavillon.component';
import { GestionCodificationComponent } from './gestion-codification/gestion-codification.component';
import { GestionReservationComponent } from './gestion-reservation/gestion-reservation.component';
import { PavillonFormComponent } from './pavillon-form/pavillon-form.component';
import { DetailsPavillonComponent } from './gestion-pavillon/details-pavillon/details-pavillon.component';


const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: HomeDashboardComponent
            },
            {
                path: 'pavillons',
                component: GestionPavillonComponent
            },
            {
                path: 'codification',
                component: GestionCodificationComponent
            },
            {
                path: 'reservation',
                component: GestionReservationComponent
            },
            {
                path: 'nouveauPavillon',
                component: PavillonFormComponent
            },
            {
                path: 'detailsPavillon',
                component: DetailsPavillonComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class DashboardRoutingModule { }