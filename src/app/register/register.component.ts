import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { environment } from "../../environments/environment";
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  
  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  constructor(
    private tokenAuthService: Angular2TokenService,
    private router: Router
  ){
    this.tokenAuthService.init(environment.token_auth_config);
  }



  @Output() onFormResult = new EventEmitter<any>();

  ngOnInit() {
  }

  onSignUpSubmit(){

    this.tokenAuthService.registerAccount(this.signUpUser).subscribe(

        (res) => {

          if (res.status == 200){
            this.router.navigateByUrl('/home');
          }

        },

        (err) => {
          console.log(err.json())
          this.onFormResult.emit({signedUp: false, err})
        }
    )

  }

}
