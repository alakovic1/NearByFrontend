import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Category } from 'src/types/category.type';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080'; 
  private selectedCategorySubject = new BehaviorSubject<number | null>(null);
  selectedCategory$ = this.selectedCategorySubject.asObservable();

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/category/all`);
  }

  setSelectedCategory(categoryId: number | null) {
    this.selectedCategorySubject.next(categoryId);
  }

  getSelectedCategory(): number | null {
    return this.selectedCategorySubject.value;
  }
}
