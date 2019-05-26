import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductCategoriesServiceService } from '../product-categories-service.service';

@Component({
  selector: 'app-cart-categories',
  templateUrl: './cart-categories.component.html',
  styleUrls: ['./cart-categories.component.scss']
})
export class CartCategoriesComponent implements OnInit {
  products;
  constructor( private pro: ProductService, private productcategory: ProductCategoriesServiceService ) {
    this.productcategory.categoryArry.subscribe(category => {
      this.products = category;
      console.log(this.products);
    });
   }

  ngOnInit() {
  }
AddToCart(product, e) {
 this.pro.AddToCart(product, e);
}
}
