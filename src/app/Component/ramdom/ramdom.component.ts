import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-ramdom',
  imports: [PageheaderComponent, SideNavComponent, CommonModule, RouterOutlet],
  templateUrl: './ramdom.component.html',
  styleUrl: './ramdom.component.css'
})
export class RamdomComponent {

}
