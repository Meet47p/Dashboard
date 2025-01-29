import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PiechartdataService } from '../../Services/piechartdata.service';
import { BarchartdataService } from '../../Component/latest/Services/barchartdata.service';
@Component({
  selector: 'app-side-nav',
  imports: [RouterLink,FormsModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  labels: string = '';
  dataValue: number = 0; // To hold the data value for the pie chart
  barchartdataService!: any; ;

  constructor(private piechartdataService: PiechartdataService,barchartdataService: BarchartdataService) {}
  salesValue: number | null = null;
  prodValue: number | null = null;

  addData1() {
    debugger;
    if (this.labels && this.salesValue !== null && this.prodValue !== null) {
      debugger;
      this.barchartdataService.UpdateChartData(this.labels, this.salesValue, this.prodValue);
      debugger;
      // Clear input fields after adding data
      this.labels = '';
      this.salesValue = null;
      this.prodValue = null;
      debugger;
    }
  }
 



  router=inject(Router)
  onSelect(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    
    if(selectedValue == "PieChart"){
      this.router.navigateByUrl('/public');
      alert("PieChart");
      this.pie=true;
    }
    else if(selectedValue == "BarChart"){
      this.router.navigateByUrl('/latest');
      alert("BarChart");
      this.bar=true;
    }
    else if(selectedValue == "LineChart"){
      this.router.navigateByUrl('/thirdc');
      alert("LineChart");
    }
    
}
showDropdown: boolean = false;
pie:boolean=false;
bar:boolean=false;
line:boolean=false;
toggleDropdown() {
  this.showDropdown=true;         // Toggle dropdown visibility
}

addData() {
  if (this.labels && this.dataValue) {
    this.piechartdataService.updateChartData(this.labels, this.dataValue);
    this.labels = '';         // Clear input after adding
    this.dataValue = 0;       // Reset data value
  }
}


}
