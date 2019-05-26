import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartCategoriesComponent } from './cart-categories/cart-categories.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

const routes: Routes = [
  {
    path: '',  component: ProductComponent,
  },
  {
    path: 'cart', component: CartListComponent,
  },
  {
    path: 'categories', component: CartCategoriesComponent,
  },
  {
    path: 'app-cart-details', component: CartDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
