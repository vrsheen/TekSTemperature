import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureMonitorService } from '../../services/temperature-monitor.service';
import { TemperatureComponent } from './temperature.component';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { RouterTestingModule } from '@angular/router/testing';

import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { recordTemperature } from './temperature.component';

describe('TemperatureComponent', () => {
  let component: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // it('Add Temperature should reflect in the service',() => {
  //   const tempComp= new TemperatureComponent( new TemperatureMonitorService(), new FormBuilder());
   
  //   tempComp.recordTemperature(1);
  //   expect(tempComp.getAllTempt().length).toBe(1);

  //   tempComp.recordTemperature(2);
  //   expect(tempComp.getAllTempt().length).toBe(2);
  // })

});


