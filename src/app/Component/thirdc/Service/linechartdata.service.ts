import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinechartdataService {
  constructor() { }
  private linechartDataSubject=new BehaviorSubject<{ labels: string[], data: number[] }>({
    labels: ['January', 'February', 'March'],
    data: [10, 12, 30]
  });

  linechartData$ = this.linechartDataSubject.asObservable();
  UpdateChartData(newLabel: string, newData: number) {
    debugger;
    const currentData = this.linechartDataSubject.value;
    const updatedLabels = [...currentData.labels, newLabel];
    const updatedData = [...currentData.data, newData];
    this.linechartDataSubject.next({ labels: updatedLabels, data: updatedData });
  }
}
