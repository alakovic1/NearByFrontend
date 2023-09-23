import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080'; 
  private selectedCategorySubject = new BehaviorSubject<number | null>(null);
  selectedCategory$ = this.selectedCategorySubject.asObservable();

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/category/all`);
  }

  setSelectedCategory(categoryId: number | null) {
    this.selectedCategorySubject.next(categoryId);
  }

  getSelectedCategory(): number | null {
    return this.selectedCategorySubject.value;
  }
}
