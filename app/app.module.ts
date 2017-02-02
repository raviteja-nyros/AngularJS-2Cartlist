import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { HeaderComponent } from './home/header.component';
import { ProfileComponent } from './home/profile.component';
import { CartPageComponent } from './home/cart-page.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-guard';
import { ProductListGuard } from './products/product-list.guard';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { OrderByPipe } from './products/orderby.pipe';
import { StarComponent } from './shared/star.component';
import { CartButtonComponent } from './shared/cart-floating.component';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {
        path: 'product/:id', // get product id in URL of PDP page */
        //{ path: 'product/:name', // get product name in URL of PDP page */
        //canActivate:[ProductDetailGuard],
        component: ProductDetailComponent
      },
      //{path: 'profile', component: ProfileComponent},
      {path: 'welcome', component: WelcomeComponent},
      //{path: 'cart', component: CartPageComponent},
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {path: '**', redirectTo: 'products', pathMatch: 'full'}
    ])
  ],
  declarations: [AppComponent, ProductListComponent,
    ProductFilterPipe, StarComponent, WelcomeComponent,
    ProductDetailComponent, HeaderComponent, ProfileComponent,
    CartButtonComponent, CartPageComponent , OrderByPipe],
  providers: [ProductDetailGuard, ProductListGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
/*{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
 { path: '**', redirectTo: 'welcome', pathMatch: 'full' }*/