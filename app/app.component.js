"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var product_service_1 = require("./products/product.service");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'EcommercE';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "<div>\n        <header></header>\n        <div class='container'>\n            <router-outlet></router-outlet> \n        </div>\n     </div>",
        styles: ['.logo-dimensions{ width:"25px";height:"25px" }'],
        providers: [product_service_1.ProductService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map