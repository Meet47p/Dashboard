import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js'
Chart.register(...registerables)
@Component({
  selector: 'app-thirdc',
  imports: [],
  templateUrl: './thirdc.component.html',
  styleUrl: './thirdc.component.css'
})
export class ThirdcComponent implements OnInit {
  chart:any;

  public config:any={
    type:'line',
   
    data:{
      labels:'line',

      datasets:[{
        label:'my first dataset',
        data:[10,0,16,10,26,14],
        borderColor:'black',
      }]

    }

  };

  ngOnInit(): void {   
    this.chart=new Chart('myChart2',this.config);
   }

}
