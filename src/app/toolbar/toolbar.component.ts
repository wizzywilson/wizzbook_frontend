import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    private snackbar: NotificationService
  ) { }

  ngOnInit() {
  }

  // Error is caught in errorhandler
  onSignInSubmit() { 
    this.authService.logInUser(this.signInUser).subscribe(
      () => {
        this.router.navigateByUrl('/profile');
        this.snackbar.notifyMessage('Login Successfull', 'OK');
      }
    );
  }

  // Error is caught in errorhandler
  logOut() {
    this.authService.logOutUser().subscribe(
      () => {
        this.router.navigateByUrl('/');
        this.snackbar.notifyMessage('Successfully Logged out', 'OK');
      }
    );
  }
}
