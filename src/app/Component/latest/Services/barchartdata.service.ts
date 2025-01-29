import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BarchartdataService {

  constructor() { }
  private chartDataSubject = new BehaviorSubject<{
    labels: string[],
    salesData: number[],
    prodData: number[]
  } >({
    labels: ['January', 'February', 'March'],
    salesData: [10, 12, 30],
    prodData: [10, 20, 23]
  });
  // Expose observable for components to subscribe to
  chartData$ = this.chartDataSubject.asObservable();

  // Method to update chart data
  UpdateChartData(newLabel: string, newSalesData: number, newProdData: number) {
    debugger;
    const currentData = this.chartDataSubject.value;
    const updatedLabels = [...currentData.labels, newLabel];
    const updatedSalesData = [...currentData.salesData, newSalesData];
    const updatedProdData = [...currentData.prodData, newProdData];
    this.chartDataSubject.next({
      labels: updatedLabels,
      salesData: updatedSalesData,
      prodData: updatedProdData
    });
  }

}
