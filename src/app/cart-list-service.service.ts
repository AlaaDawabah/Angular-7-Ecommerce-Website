import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartListServiceService {
  cartdata = [];
  cartList = new BehaviorSubject([]);
  cartListObs = this.cartList.asObservable();
  constructor() { }
  updateCartList(product) {
    this.cartdata.push(product);
    this.cartList.next(this.cartdata);
    console.log(this.cartdata);
  }
}
