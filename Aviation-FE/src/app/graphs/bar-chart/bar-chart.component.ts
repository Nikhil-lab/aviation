import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {

    responsive: true,
    legend: {
      position: "left",
      
  },
    
    // We use these empty structures as placeholders for dynamic theming.
    scales: {xAxes: [
      {
        
        ticks: {
          beginAtZero: true
        },
      }
    ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['parameters'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

    @Input() public barChartData: ChartDataSets[];

    // public barChartData: ChartDataSets[] = [];
  // public barChartData: ChartDataSets[] = [
    
  //   // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   {
      
  //     // maxBarThickness: 50,
  //     // minBarLength: 2,
  //     data: [10], label: 'overlap' },
  //   { 
  //     // maxBarThickness: 50,
  //     // minBarLength: 2,
  //     data: [3], label: 'skewness' },
  //   { 
  //     // maxBarThickness: 50,
  //     // minBarLength: 2,
  //     data: [5], label: 'par3' }
  // ];
  
  constructor(private _service:ApiService) { }

  ngOnInit() {
    
    // console.log("Checking inside bar chart");
    // this._service.getdata('/aviation/bar').subscribe((data:any)=>{
    //   this.barChartData = data['bar_chart_data'];
    // })
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}