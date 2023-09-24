import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from 'src/types/category.type';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {
  @Output() categoryChangedData = new EventEmitter<string>() ;
  @Input() flagValue: boolean = false;
  categories: Category[] = [];
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
    if (this.selectedCategory !== null && this.flagValue) {
      this.categoryService.setSelectedCategory(this.selectedCategory);
    } else {
      this.categoryChangedData.emit(this.selectedCategory);
    }
  }

}
