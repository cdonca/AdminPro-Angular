import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const ROUTES: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard', description: 'Pagina principal del adminPro' } },
            { path: 'progress', component: ProgressComponent, data: { title: 'Progress', description: 'aa' } },
            { path: 'graficas1', component: Graficas1Component, data: { title: 'Gráficas', description: 'aa' } },
            { path: 'promises', component: PromisesComponent, data: { title: 'Promesas', description: 'aa' } },
            { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs', description: 'aa' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes del Tema', description: 'aa' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( ROUTES );