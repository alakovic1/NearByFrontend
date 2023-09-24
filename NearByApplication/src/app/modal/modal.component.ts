import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { ApiService } from '../services/api.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  latitude: number | undefined;
  longitude: number | undefined;
  selectedCategory: string | undefined;
  constructor(
    private modalService: ModalService,
    private apiService: ApiService,
    private sharedService: SharedService 
  ) {}

  closeModal(): void {
    this.modalService.closeModal();
  }

  submitData(): void {
    console.log(this.latitude, this.longitude, this.selectedCategory)
    if (this.latitude !== undefined && this.longitude !== undefined) {
      this.apiService.sendCoordinatesAndCategoryId(this.latitude, this.longitude, this.selectedCategory)
        .subscribe(response => {
          this.sharedService.setSharedData(response.content); 
          this.modalService.closeModal()
        });
    }
  }
}
