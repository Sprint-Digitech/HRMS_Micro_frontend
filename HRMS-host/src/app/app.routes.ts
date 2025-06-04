import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"settings",
        loadComponent: () => import ('../../../projects/settings/src/app/app.component').then(m => m.AppComponent)
    },
    {
        path:"account-dashboard",
        loadComponent: () => import ('../../../projects/account-dashboard/src/app/app.component').then(m => m.AppComponent)
    }
];
