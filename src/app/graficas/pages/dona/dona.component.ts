import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
 // Doughnut
 public doughnutChartLabels: string[] = [ 'Valor1', 'Valor2', 'Valor3', 'Otro' ];
 public doughnutChartData: ChartData<'doughnut'> = {
   labels: this.doughnutChartLabels,
   datasets: [
     { data: [ 350, 450, 100,150 ] ,backgroundColor: ['#6405F0','#0724E3', '#05A0F0', '#45FFB8'] },
    
   ]
 };
 public doughnutChartType: ChartType = 'doughnut';


}
 