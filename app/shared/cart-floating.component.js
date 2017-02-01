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
var cart_service_1 = require("./../home/cart.service");
var CartButtonComponent = (function () {
    function CartButtonComponent(_cartService) {
        this._cartService = _cartService;
        this._getCount();
    }
    CartButtonComponent.prototype._getCount = function () {
        var _this = this;
        this._cartService.getCart()
            .subscribe(function (cart) { return _this.cartCount = cart.length; }, function (error) { return _this.errorMessage = error; });
    };
    return CartButtonComponent;
}());
CartButtonComponent = __decorate([
    core_1.Component({
        selector: 'show-cart',
        moduleId: module.id,
        templateUrl: 'cart-floating.component.html',
        styleUrls: ['cart-floating.component.css'],
        providers: [cart_service_1.CartService]
    }),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartButtonComponent);
exports.CartButtonComponent = CartButtonComponent;
//# sourceMappingURL=cart-floating.component.js.map