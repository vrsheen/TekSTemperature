import { Injectable } from '@angular/core';

import { User } from '../interfaces/user';

@Injectable()
export class AuthService {
  isLoggedIn: boolean;
  uname: string='user';
  pass: string='mypass';
  constructor() { }

  validatelogin(user:User):boolean{
    this.isLoggedIn=false;
    if(user.username==this.uname && user.password==this.pass){
      this.isLoggedIn=true;
    }
    return this.isLoggedIn;
  }
}
