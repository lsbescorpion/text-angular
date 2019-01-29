import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ListcrimeComponent } from '../pages/listcrime/listcrime.component';
import { DetailcrimeComponent } from '../pages/detailcrime/detailcrime.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'listcrimeserver', component: ListcrimeComponent },
    { path: 'detailcrime/:id', component: DetailcrimeComponent },
];

export const routing = RouterModule.forRoot(appRoutes);