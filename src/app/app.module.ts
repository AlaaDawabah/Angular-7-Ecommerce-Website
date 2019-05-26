import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ProductComponent } from './product/product.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {NgbDropdownModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { CartCategoriesComponent } from './cart-categories/cart-categories.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { SearchPipe } from './product/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavBarComponent,
    CartCategoriesComponent,
    CartListComponent,
    CartDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
   [NgbDropdownModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
