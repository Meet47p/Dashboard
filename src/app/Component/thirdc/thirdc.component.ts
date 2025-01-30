import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js'
import { LinechartdataService } from './Service/linechartdata.service';
Chart.register(...registerables)
@Component({
  selector: 'app-thirdc',
  imports: [],
  templateUrl: './thirdc.component.html',
  styleUrl: './thirdc.component.css'
})
export class ThirdcComponent implements OnInit {
  chart: any;
  config1: any;

  constructor(private linechartdataService: LinechartdataService) {} // Inject the service

  ngOnInit(): void {
    // Subscribe to the linechartData observable
    this.linechartdataService.linechartData$.subscribe((linedata: { labels: string[]; data: number[]; }) => {
      this.config1 = {
        type: 'line',
        data: {
          labels: linedata.labels,
          datasets: [
            {
              label: 'My First Dataset',
              data: linedata.data,
              borderColor: 'black',
              fill: false, // Optional: Set to true if you want the area under the line to be filled
            },
          ],
        },
      };
      this.updateChart(); // Update the chart with new data
    });
  }

  updateChart() {
    if (this.chart) {
      this.chart.destroy(); // Destroy the previous chart instance to avoid memory leaks
    }
    this.chart = new Chart('myChart2', this.config1); // Create a new chart instance
  }
}
