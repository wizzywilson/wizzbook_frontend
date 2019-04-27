import { Injectable } from '@angular/core';
import { AngularTokenService } from "angular-token";
import {Subject, Observable} from "rxjs";
import {Router} from "@angular/router";
import { map } from 'rxjs/operators';

// import {Response} from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenAuthService: AngularTokenService, private router:Router){  }

  logOutUser():Observable<Response>{
    return this.tokenAuthService.signOut()
  }

  registerUser(signUpData:  {login:string, password:string, passwordConfirmation:string}):Observable<Response>{
    return this.tokenAuthService.registerAccount(signUpData)
  }

  logInUser(signInData: {login :string, password:string}):Observable<Response>{
    return this.tokenAuthService.signIn(signInData)
  }

}
