import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
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
    private sharedService: SharedService 
  ) {}

  closeModal(): void {
    this.modalService.closeModal();
  }

  submitData(): void {
    console.log(this.latitude, this.longitude, this.selectedCategory)
    this.sharedService.setLatitude(this.latitude);
    this.sharedService.setLongitude(this.longitude);
    this.sharedService.setSelectedCategory(this.selectedCategory)
    //this.sharedService.setCurrentPage(0);
    if (this.latitude !== undefined && this.longitude !== undefined) {
      this.sharedService.sendCoordinatesAndCategoryId(this.latitude, this.longitude, this.selectedCategory)
        .subscribe(response => {
          this.sharedService.setSharedData(response.content); 
          this.modalService.closeModal()
        });
        this.sharedService.setMainListFlag(false);
    }
  }
}
