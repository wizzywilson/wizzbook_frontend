import { Injectable }     from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public authService:AuthService,
    private router:Router
    ){ }

  canActivate() {
    if(this.authService.userSignedIn$){
      return true
    }
    else{
      return false
    }
  }

}