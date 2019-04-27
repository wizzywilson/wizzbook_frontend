import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  
  signUpUser = {
    login: '',
    password: '',
    passwordConfirmation: ''
  };

  constructor(public authService:AuthService) { }

  @Output() onFormResult = new EventEmitter<any>();

  ngOnInit() {
  }

  onSignUpSubmit(){
    this.authService.registerUser(this.signUpUser);
  }

}
