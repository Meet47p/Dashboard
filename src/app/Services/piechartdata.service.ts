import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiechartdataService {

  constructor() { }
  private chartDataSubject = new BehaviorSubject<{ labels: string[], data: number[] }>({  //define the BehaviorSubject
    labels: ['January', 'February', 'March'],
    data: [10, 12, 30]
  });

  chartData$ = this.chartDataSubject.asObservable();

  updateChartData(newLabel: string, newData: number) {
    const currentData = this.chartDataSubject.value;
    const updatedLabels = [...currentData.labels, newLabel];
    const updatedData = [...currentData.data, newData];
    this.chartDataSubject.next({ labels: updatedLabels, data: updatedData });
  }
}
