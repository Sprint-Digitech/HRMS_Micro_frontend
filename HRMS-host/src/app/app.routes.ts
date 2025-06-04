import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"settings",
        loadComponent: () => import ('settings/Settings').then(m => m.SettingsComponent)
    }
];
