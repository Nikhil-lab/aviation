import { Component, OnInit, OnDestroy, AfterViewInit, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  private authListenerSubs: Subscription;
  userIsAuthenticated: boolean;

  constructor() { }

  ngOnInit(): void {
   
  }


  ngOnDestroy(): void {

  }

  logout(){
  }

}
