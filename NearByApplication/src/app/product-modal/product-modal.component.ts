import { Component, Inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/types/product.type';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product,
              private productModalService: ProductService) {}

  closeProductModal(): void {
    this.productModalService.closeProductModal();
  }

}
