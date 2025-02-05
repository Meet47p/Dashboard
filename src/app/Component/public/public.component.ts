import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js'      //must requred for chart implementation
Chart.register(...registerables)                  //must requred for chart implementation
import { PiechartdataService } from '../../Services/piechartdata.service';

@Component({
  selector: 'app-public',
  imports: [],
  templateUrl: './public.component.html',
  styleUrl: './public.component.css'
})
export class PublicComponent implements OnInit {
  chart: any;
  public config: any;

  constructor(private piechartdataService: PiechartdataService) {}

  ngOnInit(): void {
    this.piechartdataService.chartData$.subscribe(chartData => {
      this.config = {
        type: 'pie',
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: 'Attendance',
              data: chartData.data,
              backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9d'],
              borderColor: 'black',
            },
          ],
        },
        options: {
          aspectRatio: 1,
          plugins: {
            legend: {
              display: true, // Show legend if needed
            },
            tooltip: {
              enabled: true, // Enable tooltips if needed
            },
          },
          // No scales property needed for pie charts
        },
      };
      this.updateChart();
    });
  }

  updateChart() {
    if (this.chart) {
      this.chart.destroy(); // Destroy the previous chart instance
    }
    this.chart = new Chart('myChart1', this.config); // Create a new chart instance
  }
}
