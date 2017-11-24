import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureMonitorService {


  constructor() { }
  temperatureArr: number[]=[];

addTemperature(tempt:number){
   this.temperatureArr.push(tempt);
}

getAllTemperature():number[]{
  return this.temperatureArr;
}

}
