import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api/api.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  type:string;
  crud:string;
  
  eventIdFormControl = new FormControl('', [
    Validators.required
  ]);

  eventDateFormControl= new FormControl('', [
    Validators.required
  ])

  locationFormControl = new FormControl('', [
    Validators.required
  ]);

  descriptionFormControl = new FormControl('', [
    Validators.required
  ]);


  injurySeverityFormControl= new FormControl('', [
    Validators.required
  ])

  aircraftDamageFormControl = new FormControl('', [
    Validators.required
  ]);

  totalFatalInjuriesFormControl = new FormControl('', [
    Validators.required
  ]);




  group_id = new FormControl();
  selectedRole:string;
  groupList: string[] = ["Wally", "Bills"];



  eventIdMatcher = new MyErrorStateMatcher();
  eventDateMatcher= new MyErrorStateMatcher();
  locationMatcher = new MyErrorStateMatcher();
  descriptionMatcher = new MyErrorStateMatcher();
  injurySeverityMatcher = new MyErrorStateMatcher();
  aircraftDamageMatcher = new MyErrorStateMatcher();
  totalFatalInjuriesMatcher = new MyErrorStateMatcher();

  constructor(  private _service:ApiService, public dialogRef: MatDialogRef<AddFormComponent>,@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    console.log(this.data);
    this.type=this.data.type;
    this.crud=this.data.crud;
    if(this.data.EventId){
      this.eventIdFormControl.setValue(this.data.EventId);
      this.eventDateFormControl.setValue(this.data.EventDate);      
      this.locationFormControl.setValue(this.data.Location);
      this.descriptionFormControl.setValue(this.data.Description);
      this.injurySeverityFormControl.setValue(this.data.InjurySeverity);      
      this.aircraftDamageFormControl.setValue(this.data.AircraftDamage);
      this.totalFatalInjuriesFormControl.setValue(this.data.TotalFatalInjuries);
    }
    
  }

  submitForm(){
    let userInput;

      userInput={
        EventId:  this.eventIdFormControl.value,
        EventDate: this.eventDateFormControl.value,
        Location: this.locationFormControl.value,
        Description:  this.descriptionFormControl.value,
        InjurySeverity:  this.injurySeverityFormControl.value,
        AircraftDamage: this.aircraftDamageFormControl.value,
        TotalFatalInjuries: this.totalFatalInjuriesFormControl.value
      }


      this._service.postData('/aviation/data',userInput).subscribe(res=>{
        console.log("posted successfully");
        this.dialogRef.close(userInput);  
      })
         

  }

}
