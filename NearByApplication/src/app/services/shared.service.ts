import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/types/product.type';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sharedData = new BehaviorSubject<any>(null);

  setSharedData(data: Product[]) {
    this.sharedData.next(data);
  }

  getSharedData() {
    return this.sharedData.asObservable();
  }
}
