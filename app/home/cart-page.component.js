"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var cart_service_1 = require("./cart.service");
var CartPageComponent = (function () {
    function CartPageComponent(_cartService) {
        this._cartService = _cartService;
        this.cartAmount = 0;
    }
    CartPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._cartService.getCart()
            .subscribe(function (cart) {
            _this.cart = cart;
            for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
                var item = cart_1[_i];
                _this.cartAmount = _this.cartAmount + item.price;
            }
            console.log(_this.cartAmount);
        }, function (error) { return _this.errorMessage = error; });
    };
    CartPageComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this._cartService.getCart()
            .subscribe(function (cart) { return _this.cart = cart; }, function (error) { return _this.errorMessage = error; });
    };
    CartPageComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this._cartService.deleteFromCart(id)
            .subscribe(function (cart) { return _this.cart = cart; }, function (error) { return _this.errorMessage = error; });
    };
    CartPageComponent.prototype.removeAllProducts = function () {
        var _this = this;
        this._cartService.clearCart()
            .subscribe(function (cart) { return _this.cart = cart; }, function (error) { return _this.errorMessage = error; });
    };
    return CartPageComponent;
}());
CartPageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'cart-page.component.html',
        providers: [cart_service_1.CartService],
        styleUrls: ['cart-page.component.css']
    }),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartPageComponent);
exports.CartPageComponent = CartPageComponent;
//# sourceMappingURL=cart-page.component.js.map