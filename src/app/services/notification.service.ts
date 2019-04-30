import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private snackBar: MatSnackBar,
    private readonly zone: NgZone
  ) { }

  notifyMessage(message: string, action: string){
    this.zone.run(() => {
      this.snackBar.open(message, action, { duration: 3000 });
    });
  }
}
