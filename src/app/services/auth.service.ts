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

  constructor(private authService: AngularTokenService, private router:Router){  
    this.authService.validateToken().subscribe(
        res => this.userSignedIn$.next(true),  
        err => this.userSignedIn$.next(false)
    );
  }

  logOutUser():Observable<Response>{
    return this.authService.signOut().pipe(map(
      res => {
        this.userSignedIn$.next(false);
        return res;
      }
  ));
  }

  registerUser(signUpData:  {login:string, password:string, passwordConfirmation:string}):Observable<Response>{
    return this.authService.registerAccount(signUpData).pipe(
      map(
        res => {
          this.userSignedIn$.next(true);
          return res
        }
    ));
  }

  logInUser(signInData: {login:string, password:string}):Observable<Response>{
    return this.authService.signIn(signInData).pipe(
      map(
        res => {
          this.userSignedIn$.next(true);
          return res
        }
    ));
  }

}
