import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { UpdateCartCountServiceService } from './update-cart-count-service.service';
import { CartListServiceService } from './cart-list-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Getting Data From Database
  count;
  products: Observable<any[]>;
  constructor(db: AngularFireDatabase, private cartCount: UpdateCartCountServiceService, private cartList: CartListServiceService) {
    this.products = db.list('/').valueChanges();
    this.cartCount.updateCountObs.subscribe((count) => {
    this.count = count;
    });
  }
  AddToCart(productDetails, e) {
    this.cartCount.updateCartCount(++this.count);
    this.cartList.updateCartList(productDetails);
    productDetails.Quantity = 1;
    e.target.disabled = true;
  }

}

