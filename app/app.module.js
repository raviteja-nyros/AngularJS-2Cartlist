"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var header_component_1 = require("./home/header.component");
var profile_component_1 = require("./home/profile.component");
var cart_page_component_1 = require("./home/cart-page.component");
var product_list_component_1 = require("./products/product-list.component");
var product_detail_component_1 = require("./products/product-detail.component");
var product_guard_1 = require("./products/product-guard");
var product_list_guard_1 = require("./products/product-list.guard");
var product_filter_pipe_1 = require("./products/product-filter.pipe");
var star_component_1 = require("./shared/star.component");
var cart_floating_component_1 = require("./shared/cart-floating.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'products', component: product_list_component_1.ProductListComponent },
                {
                    path: 'product/:id',
                    //{ path: 'product/:name', // get product name in URL of PDP page */
                    //canActivate:[ProductDetailGuard],
                    component: product_detail_component_1.ProductDetailComponent
                },
                //{path: 'profile', component: ProfileComponent},
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                //{path: 'cart', component: CartPageComponent},
                { path: '', redirectTo: 'products', pathMatch: 'full' },
                { path: '**', redirectTo: 'products', pathMatch: 'full' }
            ])
        ],
        declarations: [app_component_1.AppComponent, product_list_component_1.ProductListComponent,
            product_filter_pipe_1.ProductFilterPipe, star_component_1.StarComponent, welcome_component_1.WelcomeComponent,
            product_detail_component_1.ProductDetailComponent, header_component_1.HeaderComponent, profile_component_1.ProfileComponent,
            cart_floating_component_1.CartButtonComponent, cart_page_component_1.CartPageComponent],
        providers: [product_guard_1.ProductDetailGuard, product_list_guard_1.ProductListGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
/*{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
 { path: '**', redirectTo: 'welcome', pathMatch: 'full' }*/ 
//# sourceMappingURL=app.module.js.map