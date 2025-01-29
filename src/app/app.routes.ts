import { Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { PublicComponent } from './Component/public/public.component';
import { LatestComponent } from './Component/latest/latest.component';
import { ThirdcComponent } from './Component/thirdc/thirdc.component';


export const routes: Routes = [
    
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'public',
        component: PublicComponent
    },
    {
        path: 'latest',
        component: LatestComponent
    },
    {
        path: 'thirdc',
        component: ThirdcComponent
    }
];
