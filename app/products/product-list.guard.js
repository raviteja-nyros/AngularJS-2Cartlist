"use strict";
var angular2_jwt_1 = require("angular2-jwt");
var ProductListGuard = (function () {
    function ProductListGuard() {
    }
    ProductListGuard.prototype.canActivate = function () {
        if (angular2_jwt_1.tokenNotExpired()) {
            return true;
        }
    };
    return ProductListGuard;
}());
exports.ProductListGuard = ProductListGuard;
//# sourceMappingURL=product-list.guard.js.map