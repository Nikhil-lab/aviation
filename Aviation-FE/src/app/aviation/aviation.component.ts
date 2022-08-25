import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-aviation',
  templateUrl: './aviation.component.html',
  styleUrls: ['./aviation.component.css']
})
export class AviationComponent implements OnInit {

  cardTitles: string[]=[];
  cardTitleValues:string[]=[];
  viewTable = false;
  userData=[];
  displayedColumns:string[];
  displayedColumnsUsers: string[] = ['user_id', 'user_name', 'group_id', 'role'];
  displayedColumnsProjects:string[]=['project_id', 'project_name','created_by','group_id'];
  tableData:any[];
  pieLables:string[]=[];
  pieValues:number[]=[];

  totalAccidents:number;
  totalAircrafts:number;
  totalFatalInj:number;
  totalSeriousInj:number;
  barData: Object[];
  pieData: Object;
  lineChartLabels: any;
  lineChartData: any;
  barChartData: any;

  

  constructor(private _service:ApiService,private  _router:Router) { }

  

  ngOnInit(): void {
    this._service.getdata('/aviation/accidents').subscribe(data=>{
      this.totalAccidents = data['num_accidents'];
    })

    this._service.getdata('/aviation/destroyed').subscribe(data=>{
      this.totalAircrafts = data['num_destroyed'];
    })

    this._service.getdata('/aviation/fatal').subscribe(data=>{
      this.totalFatalInj = data['TotalFatal'];
    })

    this._service.getdata('/aviation/serious').subscribe(data=>{
      this.totalSeriousInj = data['TotalFatal'];
    })

    this._service.getdata('/aviation/pie').subscribe(data=>{
          console.log(data);
          for (let key in data) {
            this.pieValues.push(data[key]);
            this.pieLables.push(key);
        }
    })
    
    this._service.getdata('/aviation/bar').subscribe((data:any)=>{
      console.log(data['bar_chart_data']);
      this.barChartData = data['bar_chart_data'];
    });

    this._service.getdata('/aviation/line').subscribe((data:any)=>{
      console.log(data);
      this.lineChartLabels = data.line_chart_labels;
      this.lineChartData = data.line_chart_data;
    });

    

  }

  displayTable(){
    this.viewTable = true;

  }

}
