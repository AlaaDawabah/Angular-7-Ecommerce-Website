import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartDetailsService {
 cartDetails = new BehaviorSubject([]);
 cartDetailsObs = this.cartDetails.asObservable();
 constructor() { }
 updateCartDetails(product) {
  this.cartDetails.next(product);
}
}
