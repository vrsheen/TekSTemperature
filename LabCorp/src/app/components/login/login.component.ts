import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  localUser:User={
    username: '',
    password: ''
  }

  loginsuccess:boolean;
  loginFormControl:FormGroup;

  constructor(private _service:AuthService, private _router:Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.loginsuccess=true;

    this.loginFormControl = this.formBuilder.group({
      uName: [null, [Validators.required,]],
      pass: [null, Validators.required],
    });
  }

  login(){
    if(this._service.validatelogin(this.localUser).valueOf()==true){
      this.loginsuccess=true;
      this._router.navigate(['homepage']);
    }else{
      this.loginsuccess=false;
    }
  }

}
