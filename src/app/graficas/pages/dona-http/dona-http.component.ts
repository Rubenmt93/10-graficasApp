import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

import { ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit{
 
  
  
  constructor(private GraficasService:GraficasService) { }
 
  ngOnInit(): void {
    this.GraficasService.getUsuariosRedesSociales().subscribe(
      resp=>{
        console.log(resp);
        const labels=Object.keys(resp)
        const datos=Object.values(resp)
        this.doughnutChartData={
          labels:Object.keys(resp),
          datasets:[{data:Object.values(resp)}]
        }
      }
    )
  }
 
  public doughnutChartLabels: string[] =  []/* [ 'Dascargas', 'Ventas en tienda', 'Venta online' ] */;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: []
      },
    ]
  };
 
  public doughnutChartType: ChartType = 'doughnut';

}
