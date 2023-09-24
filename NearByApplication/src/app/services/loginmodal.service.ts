import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Injectable({
  providedIn: 'root'
})
export class LoginModalService {
  constructor(private dialog: MatDialog) {}

  openLoginModal(): void {
    this.dialog.open(LoginModalComponent);
  }

  closeLoginModal(): void {
    this.dialog.closeAll();
  }
}
