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

  userSignedIn$:Subject<boolean> = new Subject();

  constructor(private tokenAuthService: AngularTokenService, private router:Router){
    this.tokenAuthService.validateToken().subscribe(
      res => {
        console.log(res)       
        this.userSignedIn$.next(true);
      },
      err => {
        this.userSignedIn$.next(false);
        console.log(err)        
      }
    )    
  }


  logOutUser():Observable<Response>{
    return this.tokenAuthService.signOut().pipe(
      map(
        res => {
          this.userSignedIn$.next(false);
          return res;
        }
    ))
  }

  registerUser(signUpData:  {login:string, password:string, passwordConfirmation:string}):Observable<Response>{
    return this.tokenAuthService.registerAccount(signUpData).pipe(
      map(
        res => {
          this.userSignedIn$.next(true);
          return res
        }
    ))
  }

  logInUser(signInData: {login :string, password:string}):Observable<Response>{
    return this.tokenAuthService.signIn(signInData).pipe(
      map(
        res => {
          this.userSignedIn$.next(true);
          return res
        }
    ));
  }

  validationTokenCheck(){

  }


}
