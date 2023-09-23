import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {
  categories: any[] = [];
  selectedCategory: any | null = '';
  
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  resetDropdown() {
    this.selectedCategory = '';
    const dropdown = document.getElementById('categoryDropdown') as HTMLSelectElement;
    if (dropdown) {
        dropdown.value = '';
        this.categoryService.setSelectedCategory(this.selectedCategory);
    }
  }
  categoryChanged() {  
    if (this.selectedCategory !== null) {
      this.categoryService.setSelectedCategory(this.selectedCategory);
    }
  }

}
