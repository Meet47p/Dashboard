import { Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';


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
];
