import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js'  //must requred for chart implementation
Chart.register(...registerables)              //must requred for chart implementation

@Component({
  selector: 'app-latest',
  imports: [],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.css'
})
export class LatestComponent implements OnInit {
  ngOnInit(): void {
    this.chart=new Chart('myChart',this.config);
   }

  chart: any;

  public config:any={
    type:'bar',
   
    data:{
      labels: ['January', 'February', 'March'],
      datasets: [
        {
          label:'sales',  
          data: [10, 12, 30],
          backgroundColor: 'blue',
          
        },
        {
          label:'prod',
          data: [10, 20, 23],
          backgroundColor: 'red',
        },
        {
          label:'exp',
          data: [10, 20, 30],
          backgroundColor: 'green',
        },
      ],
      },
      Options:{
        aspectRatio: 1,
        scales: {
          x: {
            grid: {
              display: false, // Hides the grid lines
            },
            title:{
              display: true, // Ensures the title is visible
              text: 'Months', // Label for the X-axis
            },
          },
          y: {
            grid: {
              display: false,
            },
            title: {
              display: true, // Ensures the title is visible
              text: 'Sales (in units)', // Label for the Y-axis
            },
          },
        },
      }
    };
  
}


