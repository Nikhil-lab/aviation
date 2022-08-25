import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiService } from './api/api.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './graphs/pie-chart/pie-chart.component';
import { BarChartComponent } from './graphs/bar-chart/bar-chart.component';
import { AngularMaterialModule } from './angular-material.module';
import { LineChartComponent } from './graphs/line-chart/line-chart.component';
import { AddFormComponent } from './add-form/add-form.component';
import { AviationComponent } from './aviation/aviation.component';
import { AviationTableComponent } from './aviation-table/aviation-table.component';




@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,
     PieChartComponent,

    AddFormComponent,
    BarChartComponent,

    LineChartComponent,
    AviationComponent,
    AviationTableComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ChartsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
