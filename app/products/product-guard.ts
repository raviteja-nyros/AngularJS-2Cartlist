import { Injectable } from '@angular/core';
//import {IProduct} from './product';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
//import {ProductService} from './product.service'
@Injectable()
export class ProductDetailGuard implements CanActivate {
  // products:IProduct[];
  // errorMessage:string;
  constructor(private _router: Router,
              //private _productService:ProductService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    //let id = +route.url[1].path;
    let id = route.url[1].path;
    if (typeof id === "number") {
      if (isNaN(id) || id < 1) {
        alert('Invalid product Id');
        // start a new navigation to redirect to list page
        this._router.navigate(['/products']);
        // abort current navigation
        return false;
      }
      ;
      console.log("product as number");
    } else {
      if (name === null) {
        alert('Invalid product Name');
        // start a new navigation to redirect to list page
        this._router.navigate(['/products']);
        // abort current navigation
        return false;
      }
      ;
      console.log("product as name");
    }
    return true;
  }

}
