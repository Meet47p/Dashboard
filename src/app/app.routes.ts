import { Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { PublicComponent } from './Component/public/public.component';
import { LatestComponent } from './Component/latest/latest.component';
import { ThirdcComponent } from './Component/thirdc/thirdc.component';
import { AppComponent } from './app.component';
import { RamdomComponent } from './Component/ramdom/ramdom.component';
import { authguardGuard } from './Guard/authguard.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  // {
  //     path: '',
  //     component: HomeComponent
  // },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'random',
    component: RamdomComponent,
    canActivate: [authguardGuard],
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent
          }, 
          {
            path: 'public', 
            component: PublicComponent
          },
          {
            path: 'latest',
            component: LatestComponent,
          },
          {
            path: 'thirdc',
            component: ThirdcComponent,
          },

    ]
  },



  {
    path: 'app',
    component: AppComponent
  }
];
