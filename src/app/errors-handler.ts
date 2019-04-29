import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorsHandler implements ErrorHandler {

  constructor(
    private snackbar: NotificationService
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
       // Server or connection error happened
       if (!navigator.onLine) {
         // Handle offline error
       } else {
         // Handle Http Error (error.status === 403, 404...)
         if (error.status === 401) {
           this.snackbar.notifyMessage('Unauthorized User', 'OK');
         }
       }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)     
    console.log('client error')
    }
   // Log the error anyway
   console.error('It happens: ', error);
  }
}