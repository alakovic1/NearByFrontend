import { Component } from '@angular/core';
import { LoginModalService } from '../services/loginmodal.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  constructor(private loginModalService: LoginModalService) {}

  closeLoginModal(): void {
    this.loginModalService.closeLoginModal();
  }
}
