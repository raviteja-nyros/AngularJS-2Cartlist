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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var CartService = (function () {
    function CartService(_http) {
        this._http = _http;
        this._cartUrl = 'http://localhost:3004/cartProducts';
    }
    CartService.prototype.addCart = function (product) {
        // let bodyString = JSON.stringify(product); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post(this._cartUrl, product, options) // ...using post request,options
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    CartService.prototype.getCart = function () {
        return this._http.get(this._cartUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CartService.prototype.deleteFromCart = function (id) {
        return this._http.delete(this._cartUrl + "/" + id).map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CartService.prototype.clearCart = function () {
        var _this = this;
        return this._http.get(this._cartUrl)
            .map(function (response) { return response.json(); })
            .do(function (cart) {
            cart.map(function (item) {
                _this.deleteFromCart(item.id);
            });
        })
            .catch(this.handleError);
    };
    CartService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'server error');
    };
    return CartService;
}());
CartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map