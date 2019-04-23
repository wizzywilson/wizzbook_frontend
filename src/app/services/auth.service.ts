import { Injectable } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { environment } from "../../environments/environment";
import {Subject, Observable} from "rxjs";
import {Router} from "@angular/router";

// import {Response} from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSignedIn$:Subject<boolean> = new Subject();

  constructor(private tokenAuthService: Angular2TokenService, private router:Router){
    this.tokenAuthService.init(environment.token_auth_config);
    if(this.tokenAuthService.userSignedIn()){
      this.validationTokenCheck();
    }else{
      this.userSignedIn$.next(false);
      this.router.navigate(['/']);
    }
  }


  logOutUser(){
    this.tokenAuthService.signOut().subscribe(
      res =>{
        this.userSignedIn$.next(false);
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }    
    );
  }

  registerUser(signUpData:  {email:string, password:string, passwordConfirmation:string}){
    this.tokenAuthService.registerAccount(signUpData).subscribe(
      res =>{
        this.userSignedIn$.next(true);
        this.router.navigateByUrl('/profile')
      },
      error =>    console.log(error)
    );
  }

  logInUser(signInData: {email:string, password:string}){
    this.tokenAuthService.signIn(signInData).subscribe(
      res => {
        this.userSignedIn$.next(true);
        this.router.navigateByUrl('/profile')
      },
      error =>    console.log(error)
    );

  }

  validationTokenCheck(){
    this.tokenAuthService.validateToken().subscribe(
      res => {
        this.userSignedIn$.next(true);
        this.router.navigateByUrl('/profile');
      },
      err => {
        this.userSignedIn$.next(false);
        this.router.navigate(['/']);
        console.log(err)        
      }
    )
  }


}
