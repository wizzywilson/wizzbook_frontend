import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { NotificationService } from '../services/notification.service';

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
    private snackbar: NotificationService
  ) { }

  ngOnInit() {
  }

  // Error is caught in errorhandler
  onSignUpSubmit() {
    this.authService.registerUser(this.signUpUser).subscribe(
      () => {
        this.router.navigateByUrl('/profile');
        this.snackbar.notifyMessage('Signup Successfull', 'OK');
      }
    );
  }

}
