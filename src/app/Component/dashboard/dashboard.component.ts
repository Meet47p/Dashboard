import { Component } from '@angular/core';
import { LatestComponent } from '../latest/latest.component';
import { PublicComponent } from '../public/public.component';
import { ThirdcComponent } from '../thirdc/thirdc.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [LatestComponent, PublicComponent, ThirdcComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
