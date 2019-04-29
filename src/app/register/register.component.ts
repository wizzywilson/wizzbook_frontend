import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material';

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

  constructor(
    public authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onSignUpSubmit() {
    this.authService.registerUser(this.signUpUser).subscribe(
      () => {
        this.router.navigateByUrl('/profile')
        .then(() => this.snackBar.open('Signup Successfull', 'Ok', {
          duration: 5000,
        }));
      },
      (err) => console.log(err)
    );
  }

}
