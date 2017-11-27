import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TemperatureMonitorService } from '../../services/temperature-monitor.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
  providers: [TemperatureMonitorService]
})
export class TemperatureComponent implements OnInit {

  temptForm: FormGroup;
  temptBtnFormControl: FormControl;
  inpTempt:number=null;
  medianArr:number[]=null;
  medianNum:number[];
  midElemts:number[];
  sumMedian:number=0;
 
  constructor(private _service:TemperatureMonitorService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.temptForm=this.formBuilder.group({});
    this.temptBtnFormControl=new FormControl('',[Validators.required]);
  }


  public recordTemperature(_inpTempt=this.inpTempt){
    this._service.addTemperature(_inpTempt);
    this.medianArr=null;
    this.temptForm.reset;
    // this.inpTempt=null;
    // this.temptForm.markAsUntouched;
  }

  getAllTempt():number[]{
    return this._service.getAllTemperature();
    
}
  sortTempt(_getAllTempt=this._service.getAllTemperature()){
    this.medianArr=_getAllTempt.slice(0);
    this.medianArr.sort((a,b) => {
      if(a < b) return -1;
      else if(a > b ) return 1;
      else return 0;
    })
  }    

    getCurrentMedian(){
      this.medianNum=[];   
      this.sumMedian=0;   
      this.sortTempt();
      if(this.medianArr.length %2!=0){
        this.medianNum=this.medianArr.slice(this.medianArr.length/2,(this.medianArr.length/2)+1);
      }else{
        this.midElemts=this.medianArr.slice((this.medianArr.length/2)-1,(this.medianArr.length/2)+1);
        console.log(this.midElemts);
        for(let elemt of this.midElemts){
          this.sumMedian=this.sumMedian+elemt;
        }

        this.medianNum.push(this.sumMedian);
      }
    }

}
