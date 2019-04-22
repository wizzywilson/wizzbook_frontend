import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { environment } from "../../environments/environment";
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  signInUser = {
    email: '',
    password: ''
  };
  @Output() onFormResult = new EventEmitter<any>();

  constructor(
    private tokenAuthService: Angular2TokenService,
    private router: Router
  ){
    this.tokenAuthService.init(environment.token_auth_config);
  }

  ngOnInit() {
  }

  onSignInSubmit(){
    this.tokenAuthService.signIn(this.signInUser).subscribe(
        res => {
          if(res.status == 200){
            this.router.navigateByUrl('/home');
          }
        },
        err => {
          console.log('err:', err);
          this.onFormResult.emit({signedIn: false, err});
        }
    )

  }
}
