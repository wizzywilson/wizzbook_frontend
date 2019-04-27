import { Injectable }     from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AngularTokenService } from "angular-token";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authTokenService:AngularTokenService,
    private router:Router
    ){ }

  canActivate() {
    if(this.authTokenService.userSignedIn()){
      this.authTokenService.validateToken().subscribe(
        res => { return true },
        error => { return false }
      );
    }else{
      return false;
    }
  }

}