import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ApiService } from '../api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddFormComponent } from '../add-form/add-form.component';


export interface AviationData{
  EventId: string;
  EventDate: string;
  InjurySeverity: string;
  AircraftDamage:string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'MOOSE CREEK, ID', weight: 1.0079, symbol: 'Stinson'},
//   {position: 5, name: 'Texas', weight: 4.0026, symbol: 'Stinson'},
//   {position: 4, name: 'Arlington', weight: 6.941, symbol: 'Boeing'},
//   {position: 4, name: 'Bloomington', weight: 9.0122, symbol: 'Pipper'},
//   {position: 5, name: 'Chicago', weight: 10.811, symbol: 'Cessna'},
//   {position: 1, name: 'Washington', weight: 12.0107, symbol: 'Pipper'},
//   {position: 2, name: 'Smoky Mountains', weight: 14.0067, symbol: 'Rockwell'},
//   {position: 4, name: 'Tennesse', weight: 15.9994, symbol: 'Stinson'},
//   {position: 3, name: 'New York', weight: 18.9984, symbol: 'Cessna'},
//   {position: 5, name: 'California', weight: 20.1797, symbol: 'Boeing'},
// ];

// let ELEMENT_DATA: PeriodicElement[] =[];


@Component({
  selector: 'app-aviation-table',
  templateUrl: './aviation-table.component.html',
  styleUrls: ['./aviation-table.component.css']
})
export class AviationTableComponent implements OnInit {


  @Output() goBack = new EventEmitter<boolean>();
  displayedColumns: string[] = ['EventId','EventDate', 'Location','InjurySeverity', 'Broadphaseofflight','Actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  columnsToDisplay: string[];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private _dialog: MatDialog,private _router: Router, private _service:ApiService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  
  }

  ngOnInit(): void {
    // this.displayedColumns=  this.displayedColumns.concat(['myExtraColumn']);
    this._service.getdataparams('/aviation/data',{params:{"page_size":1000,"page_num":1}}).subscribe((data)=>{
      console.log("Data is here");
      console.log(data);
      this.dataSource = new MatTableDataSource(data["data"]);
      this.dataSource.paginator = this.paginator;
    })
  }


  addNewIncident(){
    let dialogdata={
      crud:"Add Incident",
      
    }

    const dialogRef=this._dialog.open(AddFormComponent,{panelClass: 'myapp-no-padding-dialog',
        data: dialogdata,
        height: '600px',
        width: '600px',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this._service.getdataparams('/aviation/data',{params:{"page_size":1000,"page_num":1}}).subscribe((data)=>{
        console.log("Data is here");
        console.log(data);
        this.dataSource = new MatTableDataSource(data["data"]);
        this.dataSource.paginator = this.paginator;
      })
    });

  }

  viewIncident(row){
    console.log(row);
    let dialogdata={
      crud:"Details",
      "EventId": row.EventId, 
      "EventDate": row.EventDate, 
      "Location": row.Location,
      "InjurySeverity": row.InjurySeverity,
      "AircraftDamage": row.AircraftDamage,
      "Make": row.Make,
      "TotalFatalInjuries": row.TotalFatalInjuries ,
      "TotalSeriousInjuries": row.TotalSeriousInjuries ,
      "WeatherCondition": row.WeatherCondition ,
      "Broadphaseofflight":row.Broadphaseofflight ,
      "Description": row.Description,   
    }

    const dialogRef=this._dialog.open(AddFormComponent,{panelClass: 'myapp-no-padding-dialog',
        data: dialogdata,
        height: '600px',
        width: '600px',
      });
  }

  editIncident(row){


    let dialogdata={
      crud:"Update Incident",
      "EventId" : row.EventId, 
      "EventDate": row.EventDate, 
      "Location": row.Location,
      "InjurySeverity": row.InjurySeverity,
      "AircraftDamage": row.AircraftDamage,
      "Make": row.Make,
      "TotalFatalInjuries": row.TotalFatalInjuries ,
      "TotalSeriousInjuries": row.TotalSeriousInjuries ,
      "WeatherCondition": row.WeatherCondition ,
      "Broadphaseofflight":row.Broadphaseofflight ,
      "Description": row.Description, 
    }

    const dialogRef=this._dialog.open(AddFormComponent,{panelClass: 'myapp-no-padding-dialog',
        data: dialogdata,
        height: '600px',
        width: '600px',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this._service.getdataparams('/aviation/data',{params:{"page_size":1000,"page_num":1}}).subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data["data"]);
        this.dataSource.paginator = this.paginator;
      })
    });
 
  }

  deleteIncident(row){
    console.log(row.EventId);
    this._service.deleteData('/aviation/data/',row.EventId).subscribe(res=>{
      console.log("Record deleted");
      this._service.getdataparams('/aviation/data',{params:{"page_size":1000,"page_num":1}}).subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data["data"]);
        this.dataSource.paginator = this.paginator;
      })
    })
  }
  
  
}
