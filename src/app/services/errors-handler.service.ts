import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorsHandlerService implements ErrorHandler {
  
  handleError(error: Error | HttpErrorResponse) {   
    if (error instanceof HttpErrorResponse) {
       // Server or connection error happened
       if (!navigator.onLine) {
         // Handle offline error
         console.log('offline error');
       } else {
         // Handle Http Error (error.status === 403, 404...)
         console.log('online error');
       }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)     
    console.log("client error")
    }
   // Log the error anyway
   console.error('It happens: ', error);
  }
}