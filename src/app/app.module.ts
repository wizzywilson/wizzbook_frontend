import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { AngularTokenModule } from 'angular-token';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CommonModule } from '@angular/common';
import { ErrorsHandler } from './errors-handler';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ToolbarComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:3000'
    }),
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    AngularTokenModule,
    AuthService,
    AuthGuard,
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    }
  ],
  bootstrap: [AppComponent],
  exports: [MatSnackBarModule]
})
export class AppModule { }
