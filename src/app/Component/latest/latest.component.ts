import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js'  //must requred for chart implementation
import { Subscription } from 'rxjs/internal/Subscription';
import { BarchartdataService } from './Services/barchartdata.service';
Chart.register(...registerables)              //must requred for chart implementation

@Component({
  selector: 'app-latest',
  imports: [],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.css'
})
export class LatestComponent implements OnInit {
  chart: any;
  private subscription!: Subscription;

  constructor(private barchartdataService: BarchartdataService) { }

  ngOnInit(): void {
    this.subscription = this.barchartdataService.chartData$.subscribe(data => {
      this.updateChart(data);
    });
  }

  updateChart(data: { labels: string[], salesData: number[], prodData: number[] }) {
    if (this.chart) {
      this.chart.destroy(); // Destroy existing chart instance
    }
    this.chart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Sales',
            data: data.salesData,
            backgroundColor: 'blue',
          },
          {
            label: 'Prod',
            data: data.prodData,
            backgroundColor: 'red',
          },
        ],
      },
      options: {
        aspectRatio: 1,
        scales: {
          x: {
            grid: {
              display: false,
            },
            title: {
              display: true,
              text: 'Months',
            },
          },
          y: {
            grid: {
              display: false,
            },
            title: {
              display: true,
              text: 'Sales (in units)',
            },
          },
        },
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Clean up subscription
  }
}

