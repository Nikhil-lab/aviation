import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationTableComponent } from './aviation-table.component';

describe('AviationTableComponent', () => {
  let component: AviationTableComponent;
  let fixture: ComponentFixture<AviationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
