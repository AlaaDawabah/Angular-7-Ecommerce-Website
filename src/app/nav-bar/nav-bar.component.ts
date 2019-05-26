import { Component, OnInit } from '@angular/core';
import { UpdateCartCountServiceService } from '../update-cart-count-service.service';
import { ProductService } from '../product.service';
import { ProductCategoriesServiceService } from '../product-categories-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  count;
  products;
  // tslint:disable-next-line:max-line-length
  constructor(private cartCount: UpdateCartCountServiceService, private pro: ProductService, private productCategory: ProductCategoriesServiceService) {
    this.cartCount.updateCountObs.subscribe((count) => {
      this.count = count;
      console.log(count);
    });
  }
  ngOnInit() {
    window.addEventListener('scroll', (e) => {
      const nav = document.getElementById('nav');
      if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.classList.add('nav-colored');
      } else {
        nav.classList.remove('nav-colored');
      }
    });
  }
  setView(e) {
    this.pro.products.subscribe((product) => {
      this.products = product.filter((elem) => {
        return elem['Product-Category'] === e.target.innerText;
      });
      this.productCategory.updateCategory(this.products);
    });
  }

}
