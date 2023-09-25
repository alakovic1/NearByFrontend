import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/types/product.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sharedData = new BehaviorSubject<any>(null);

  private baseUrl = 'http://localhost:8080';

  latitude: number | undefined;
  longitude: number | undefined;
  selectedCategory: string | undefined;

  mainList: boolean = true;

  currentPage = 0;
  pageSize = 2; //for testing

  constructor(private http: HttpClient) {}

  getCurrentPage(){
    return this.currentPage;
  }

  setCurrentPage(data : number){
    this.currentPage = data;
  }

  setSharedData(data: Product[]) {
    this.sharedData.next(data);
  }

  getSharedData() {
    return this.sharedData.asObservable();
  }

  getLatitude(){
    return this.latitude;
  }

  setLatitude(data : number | undefined){
    this.latitude = data;
  }

  getLongitude(){
    return this.longitude;
  }

  setLongitude(data : number | undefined){
    this.longitude = data;
  }

  getSelectedCategory(){
    return this.selectedCategory;
  }

  setSelectedCategory(data : string | undefined){
    this.selectedCategory = data;
  }

  getMainListFlag(){
    return this.mainList;
  }

  setMainListFlag(data : boolean){
    this.mainList = data;
  }

  callApiService(){
    if (this.latitude !== undefined && this.longitude !== undefined){
      this.sendCoordinatesAndCategoryId(this.latitude, this.longitude, this.selectedCategory)
      .subscribe(response => {
        this.setSharedData(response.content); 
      });
    }
  }

  sendCoordinatesAndCategoryId(latitude: number, longitude: number, categoryId: string | undefined): Observable<any> {
    const baseUrl = `${this.baseUrl}/product/nearest/${longitude}/${latitude}/${this.currentPage}/${this.pageSize}`;
    const url = categoryId ? `${baseUrl}?categoryId=${categoryId}` : baseUrl;
    return this.http.get(url);
  }

}
