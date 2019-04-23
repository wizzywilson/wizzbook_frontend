import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from "../services/auth.service";

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

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

  onSignInSubmit(){
    this.authService.logInUser(this.signInUser);
  }

  logOut(){
    this.authService.logOutUser();
  }
}
