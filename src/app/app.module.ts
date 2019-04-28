import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { AngularTokenModule } from 'angular-token';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { CommonModule } from '@angular/common';  
import { ErrorsHandlerService } from "./services/errors-handler.service"

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ToolbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // HttpModule,
    FormsModule,
    CommonModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:3000'
    }),
    HttpClientModule
  ],
  providers: [
    AngularTokenModule,
    AuthService,
    AuthGuard,
    {
      provide: ErrorHandler,
      useClass: ErrorsHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
