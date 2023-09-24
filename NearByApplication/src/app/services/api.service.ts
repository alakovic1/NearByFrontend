import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  sendCoordinatesAndCategoryId(latitude: number, longitude: number, categoryId: string | undefined): Observable<any> {
    const baseUrl = `${this.baseUrl}/product/nearest/${longitude}/${latitude}/0/10`;
    const url = categoryId ? `${baseUrl}?categoryId=${categoryId}` : baseUrl;
    return this.http.get(url);
  }
}
