import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from "../../environments/environment"
import { BehaviorSubject, Subject } from 'rxjs';

let BACKEND_URl=environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  base:string;

  constructor(private http: HttpClient) {

   }

// httpParams = new HttpParams().set('ssl', 'false');

// options = { params: this.httpParams };


  getdata(endPoint){
  return this.http.get(BACKEND_URl+endPoint);
  }

  getdataparams(endPoint,params){
    return this.http.get(BACKEND_URl+endPoint,params);
  }


  postData(endPoint,data){
   return this.http.post( BACKEND_URl+endPoint,data);
  }

  deleteData(endPoint,id){
    return this.http.delete(BACKEND_URl+endPoint+id);
  }
  
}
