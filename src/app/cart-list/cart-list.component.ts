import { Component, OnInit } from '@angular/core';
import { CartListServiceService } from '../cart-list-service.service';
import { IncremntItemCountService } from '../incremnt-item-count.service';
import { UpdateCartCountServiceService } from '../update-cart-count-service.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  products: any[];
  count;
  cartCount;
  // tslint:disable-next-line:max-line-length
  constructor(private cartList: CartListServiceService, private countItem: IncremntItemCountService, private cartCountService: UpdateCartCountServiceService) {
    this.cartList.cartListObs.subscribe(cart => {
      this.products = cart;
      console.log(this.products);
    });
  }

  ngOnInit() {
    // this.countItem.itemCountObs.subscribe(count => {
    //   this.count = count;
    // });
    this.cartCountService.updateCountObs.subscribe(count => {
      this.cartCount = count;
    });
  }
  addItem(product) {
    // this.countItem.updateItemCount(++this.count);
    product.Quantity++;
    this.cartCountService.updateCartCount(++this.cartCount);

  }
  removeItem(product) {
    // tslint:disable-next-line:max-line-length
    product.Quantity === 1 ? this.cartList.cartdata.splice(this.cartList.cartdata.indexOf(product), 1) :  product.Quantity-- ;
    this.cartCount === 0 ? this.cartCountService.updateCartCount(0) : this.cartCountService.updateCartCount(--this.cartCount);
    console.log(this);
  }
}
