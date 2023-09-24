import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.css']
})
export class ProductListingsComponent implements OnInit {
  propertyData: any[] = [];
  currentPage = 0;
  pageSize = 2; //for testing 
  totalPages = 0;

  constructor(private http: HttpClient,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadProducts(); 
    this.categoryService.selectedCategory$.subscribe(categoryId => {
      this.loadProducts(); 
    });
  }
  
  loadProducts() {
    const selectedCategory = this.categoryService.getSelectedCategory();
    const url = selectedCategory
      ? `http://localhost:8080/product/byCategoryId/${selectedCategory}/${this.currentPage}/${this.pageSize}`
      : `http://localhost:8080/product/all/${this.currentPage}/${this.pageSize}`;

    this.http.get<any[]>(url).subscribe((data: any) => {
      this.propertyData = data.content;
      this.totalPages = data.totalPages
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadProducts();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadProducts();
    }
  }

}
