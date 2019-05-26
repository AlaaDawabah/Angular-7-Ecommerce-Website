import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { UpdateCartCountServiceService } from '../update-cart-count-service.service';
import { CartListServiceService } from '../cart-list-service.service';
import { CartDetailsService } from '../cart-details.service';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products;
  productDeatils;
  count;
  searchWord;
  // tslint:disable-next-line:max-line-length
  constructor(private pro: ProductService, private cartCount: UpdateCartCountServiceService, private cartList: CartListServiceService, private cartDetails: CartDetailsService , private route: Router) {
    this.pro.products.subscribe(res => {
      this.products = res;
      // console.log(this.products);
    });
  }


  // ADD TO CART
  ngOnInit() {
    this.cartCount.updateCountObs.subscribe((count) => {
      this.count = count;
    });
  }

  productDetails(product) {
    this.cartDetails.updateCartDetails(product);
    this.route.navigate(['/app-cart-details']);
  }
  AddToCart(productDetails, e) {
    this.pro.AddToCart(productDetails, e);
  }

}
