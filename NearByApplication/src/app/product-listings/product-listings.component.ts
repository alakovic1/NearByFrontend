import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { ProductService } from '../services/product.service';
import { SharedService } from '../services/shared.service';
import { Product } from 'src/types/product.type';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.css']
})
export class ProductListingsComponent implements OnInit {

  @Input() mainList: boolean = true;

  propertyData: Product[] = [];
  currentPage = 0;
  pageSize = 2; //for testing 
  totalPages = 0;

  constructor(private http: HttpClient,
    private categoryService: CategoryService,
    private dialog: MatDialog, private productService: ProductService,  private sharedService: SharedService ) { }

  ngOnInit(): void {
    this.currentPage = this.sharedService.getCurrentPage();
    this.loadProducts(); 
    this.categoryService.selectedCategory$.subscribe(categoryId => {
      this.loadProducts(); 
    });
  
  this.sharedService.getSharedData().subscribe(data => {
    if (data) {
      this.propertyData = data;
    }
  });
  }
  
  loadProducts() {
    const selectedCategory = this.categoryService.getSelectedCategory();
    const url = selectedCategory
      ? `http://localhost:8080/product/byCategoryId/${selectedCategory}/${this.currentPage}/${this.pageSize}`
      : `http://localhost:8080/product/all/${this.currentPage}/${this.pageSize}`;

    this.http.get<{content: Product[],totalPages: number }>(url).subscribe((data: {content: Product[],totalPages: number }) => {
      this.propertyData = data.content;
      this.totalPages = data.totalPages
    });
  }

  nextPage() {
    if (this.sharedService.getCurrentPage() < this.totalPages - 1) {
      this.currentPage++;
      this.sharedService.setCurrentPage(this.currentPage);
      if(this.sharedService.getMainListFlag()){
        this.loadProducts();
      }
      else {
        this.sharedService.callApiService();
      }
    }
  }

  previousPage() {
    if (this.sharedService.getCurrentPage() > 0) {
      this.currentPage--;
      this.sharedService.setCurrentPage(this.currentPage);
      if(this.sharedService.getMainListFlag()){
        this.loadProducts();
      }
      else {
        this.sharedService.callApiService();
      }
    }
  }

  async openProductModal(productId: number) {
   this.productService.getProductById(productId).subscribe((data) => {
    this.dialog.open(ProductModalComponent, {
      data: data,
  });
   })
   
  }

}
