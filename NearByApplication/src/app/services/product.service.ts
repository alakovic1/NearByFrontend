import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient,
    private dialog: MatDialog) {}


  getProductById(productId: number) {
    return this.http.put(`http://localhost:8080/product/getProduct/${productId}`, {})
  }

  closeProductModal(): void {
    this.dialog.closeAll();
  }

}
