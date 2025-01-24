import { Component } from '@angular/core';
import { LatestComponent } from '../latest/latest.component';
import { PublicComponent } from '../public/public.component';

@Component({
  selector: 'app-dashboard',
  imports: [LatestComponent, PublicComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
