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
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var cart_service_1 = require("./../home/cart.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _router, _productService, _cartService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this._cartService = _cartService;
        this.pageTitle = 'Product Detail';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* get product id in URL of PDP page */
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id']; // add a + at the beginning. + is a javascript shortcut to convert parameter string to numeric id
            _this.getProduct(id);
        });
        /* get product name in URL of PDP page
         this.sub = this._route.params.subscribe(
         params => {
         let name = params['name'];
         this.getProductName(name);
         });
         */
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    //get product id to show up in URL of pdp page
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    //get product name to show up in URL of pdp page
    ProductDetailComponent.prototype.getProductName = function (name) {
        var _this = this;
        this._productService.getProductName(name).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    ProductDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product Detail: ' + message;
    };
    ProductDetailComponent.prototype.addToCart = function (product) {
        var _this = this;
        this._cartService.addCart(product).subscribe(function (cart) { return _this.cart = product; }, function (error) { return _this.errorMessage = error; });
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-detail.component.html',
        providers: [cart_service_1.CartService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        product_service_1.ProductService,
        cart_service_1.CartService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map