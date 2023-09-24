import { Component } from '@angular/core';
import { ModalService } from '../app/services/modal.service';
import { LoginModalService } from '../app/services/loginmodal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NearByApplication';

  constructor(private modalService: ModalService,
    private loginModalService: LoginModalService) {}

  openModal(): void {
    this.modalService.openModal();
  }

  openLoginModal(): void {
    this.loginModalService.openLoginModal();
  }
}
