import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

   // Doughnut
   public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   public doughnutChartData: MultiDataSet = [[350, 450, 100]];
   public doughnutChartType: ChartType = 'doughnut';  

  constructor() { }

  ngOnInit() {
  }
  
}
