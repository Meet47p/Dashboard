import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PiechartdataService } from '../../Services/piechartdata.service';
import { BarchartdataService } from '../../Component/latest/Services/barchartdata.service';
import { LinechartdataService } from '../../Component/thirdc/Service/linechartdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  imports: [RouterLink, FormsModule,CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  barchartdataService = inject(BarchartdataService);
  linechartdataService = inject(LinechartdataService);
  piechartdataService = inject(PiechartdataService);

  labels: string = '';
  dataValue!: number;
  salesValue: number | null = null;
  prodValue: number | null = null;
  newdata!: number;

  selectedChart: string = '';     // Variable to track the selected chart type
  showDropdown: boolean = false; // Control dropdown visibility
  BarData() {
    if (this.labels && this.salesValue !== null && this.prodValue !== null) {
      this.barchartdataService.UpdateChartData(this.labels, this.salesValue, this.prodValue);
      this.labels = ''; // Clear the labels after adding data
      this.salesValue = null;
      this.prodValue = null;
    }
  }

  lineData() {
    if (this.labels && this.newdata) {
      this.linechartdataService.UpdateChartData(this.labels, this.newdata);
      this.labels = '';
      this.newdata = 0;
    }
  }

  pieData() {
    if (this.labels && this.dataValue) {
      this.piechartdataService.updateChartData(this.labels, this.dataValue);
      this.labels = '';  
      this.dataValue = 0;
    }
  }

  router = inject(Router);

  onSelect(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedChart = selectedValue; // Update the selected chart type

    // Navigate to the corresponding route
    if (selectedValue === "PieChart") {
      this.router.navigateByUrl('/public');
    } else if (selectedValue === "BarChart") {
      this.router.navigateByUrl('/latest');
    } else if (selectedValue === "LineChart") {
      this.router.navigateByUrl('/thirdc');
    }
  }

  

  toggleDropdown() {
    this.showDropdown = !this.showDropdown; // Toggle dropdown visibility
  }

}