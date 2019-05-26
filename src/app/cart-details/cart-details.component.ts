import { Component, OnInit } from '@angular/core';
import { CartDetailsService } from '../cart-details.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  cartDetails;
  constructor(private details: CartDetailsService) {
    this.details.cartDetailsObs.subscribe(cart => {
      this.cartDetails = cart;
    });
  }

  ngOnInit() {
  }

}
