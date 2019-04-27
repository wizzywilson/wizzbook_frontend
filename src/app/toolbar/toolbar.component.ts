import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

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
  
  @Output() onFormResult = new EventEmitter<any>();

  constructor(
    public authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSignInSubmit(){
    this.authService.logInUser(this.signInUser).subscribe(
      ()=> this.router.navigateByUrl('/profile'),
      (err)=> console.log(err)
    );
  }

  logOut(){
    this.authService.logOutUser().subscribe(
      ()=>this.router.navigateByUrl('/'),
      (err)=> console.log(err)
    );
  }
}
