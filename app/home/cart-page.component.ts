import { Component, OnInit } from '@angular/core';
import { ICart } from './cart';
import { CartService } from './cart.service';
@Component({
  moduleId: module.id,
  templateUrl: 'cart-page.component.html',
  providers: [CartService],
  styleUrls: ['cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart: ICart[];
  errorMessage: string;
  cartAmount: number;

  constructor(private _cartService: CartService) {
    this.cartAmount = 0;
  }

  ngOnInit(): void {
    this._cartService.getCart()
      .subscribe(cart => {
          this.cart = cart;
          for (var item of cart) {
            this.cartAmount = this.cartAmount + item.price;
          }
          console.log(this.cartAmount);
        },
        error => this.errorMessage = <any>error);
  }

  ngOnChanges(): void {
    this._cartService.getCart()
      .subscribe(cart => this.cart = cart,
        error => this.errorMessage = <any>error);
  }

  deleteProduct(id: number) {
    this._cartService.deleteFromCart(id)
      .subscribe(cart => this.cart = cart,
        error => this.errorMessage = <any>error);

  }

  removeAllProducts(){
    this._cartService.clearCart()
      .subscribe(cart => this.cart = cart,
        error => this.errorMessage = <any>error);
  }
}