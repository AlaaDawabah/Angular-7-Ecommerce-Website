import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCategoriesComponent } from './cart-categories.component';

describe('CartCategoriesComponent', () => {
  let component: CartCategoriesComponent;
  let fixture: ComponentFixture<CartCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
