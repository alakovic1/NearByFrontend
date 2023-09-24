import { Component } from '@angular/core';
import { ModalService } from '../app/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NearByApplication';

  constructor(private modalService: ModalService) {}

  openModal(): void {
    this.modalService.openModal();
  }
}
