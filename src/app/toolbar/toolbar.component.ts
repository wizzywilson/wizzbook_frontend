import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  signInUser = {
    login: '',
    password: ''
  };

  constructor(
    public authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onSignInSubmit() {
    this.authService.logInUser(this.signInUser).subscribe(
      () => {
        this.router.navigateByUrl('/profile')
          .then(() => this.snackBar.open('Login Successfull', 'Ok', {
            duration: 5000,
          }));
      },
      (err) => console.log(err)
    );
  }

  logOut() {
    this.authService.logOutUser().subscribe(
      () => {
        this.router.navigateByUrl('/')
          .then(() => this.snackBar.open('Successfully Logged out', 'Ok', {
            duration: 5000,
          }));
      },
      (err) => console.log(err)
    );
  }
}
