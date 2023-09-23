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
      ? `http://localhost:8080/product/byCategoryId/${selectedCategory}`
      : 'http://localhost:8080/product/all';

    this.http.get<any[]>(url).subscribe(data => {
      this.propertyData = data;
    });
  }
}
