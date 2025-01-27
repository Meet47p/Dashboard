import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SideNavComponent } from './Component/side-nav/side-nav.component';
import { PageheaderComponent } from './Component/pageheader/pageheader.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './Component/dashboard/dashboard.component';



@Component({
  selector: 'app-root',
  imports: [ PageheaderComponent, SideNavComponent,CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';

}
