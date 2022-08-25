import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import {MatStepperModule} from '@angular/material/stepper';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';



import {
  MatRadioModule,
  MAT_RADIO_DEFAULT_OPTIONS,
} from "@angular/material/radio";
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    MatSnackBarModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule,
    MatInputModule,
    MatStepperModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
    
  ],

  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: "primary" },
    },
  ],

  exports: [
    MatSnackBarModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule,
    MatInputModule,
    MatStepperModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ]
})
export class AngularMaterialModule {}
