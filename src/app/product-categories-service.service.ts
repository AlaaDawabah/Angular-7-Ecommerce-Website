import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesServiceService {
  categoryArry = new BehaviorSubject([]);
  categoryObs = this.categoryArry.asObservable();
  constructor() { }
  updateCategory(arr) {
    this.categoryArry.next(arr);
  }
}
