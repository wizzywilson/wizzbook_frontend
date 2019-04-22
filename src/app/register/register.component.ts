import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private tokenAuthService: Angular2TokenService){
    this.tokenAuthService.init(environment.token_auth_config);
  }

  ngOnInit() {
  }

}
