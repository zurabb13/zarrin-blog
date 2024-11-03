import { Routes } from '@angular/router';
import { LandingPageComponent } from './page/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'page',
        pathMatch: 'full'
    },
    {
        path: 'page',
        component:LandingPageComponent
        
    }
];
