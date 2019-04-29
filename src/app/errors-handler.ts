import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorsHandler implements ErrorHandler {

  constructor(
    private snackbar: NotificationService,
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
       // Server or connection error happened
       if (!navigator.onLine) {
         // Handle offline error
         this.snackbar.notifyMessage('No Internet Connection', 'OK');
       } else {
         // Handle Http Error (error.status === 403, 404...)
          switch (error.status) {
            case 401: {
              this.snackbar.notifyMessage('Unauthorized User', 'OK');
              break;
            }
            case 404: {
              this.snackbar.notifyMessage('Not Found', 'OK');
              break;
            }
            case 500: {
              this.snackbar.notifyMessage('Internal Server Error', 'OK');
              break;
            }
            case 422: {
              this.snackbar.notifyMessage(error.error.errors.full_messages, 'OK');
              break;
            }
            default: {
              this.snackbar.notifyMessage(error.message, 'OK');
              break;
            }
          } 
       }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)     
      this.snackbar.notifyMessage(error.message, 'OK');
    }
   // Log the error anyway
   console.error('It happens: ', error);
  }
}