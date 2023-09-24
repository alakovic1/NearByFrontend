import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open(ModalComponent);
  }

  closeModal(): void {
    this.dialog.closeAll();
  }
}
