import { Injectable }     from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { Angular2TokenService } from "angular2-token";
import { environment } from "../../environments/environment";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authTokenService:Angular2TokenService,
              private router:Router){
                this.authTokenService.init(environment.token_auth_config);
              }

  canActivate() {
    if(this.authTokenService.userSignedIn()){
      return true;
    }else{
      this.router.navigate(['/']);
      return false;
    }
  }

}