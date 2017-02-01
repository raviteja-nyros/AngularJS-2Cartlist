import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IProduct } from './product';

@Injectable()
export class ProductService {
  private _productUrl = 'http://10.90.90.147:3005/productList';

  constructor(private _http: Http) {

  }

  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._productUrl)
      .map((response: Response) => <IProduct[]>response.json())
      .do(data => data)
      //.do(this.checkIds)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'server error');
  }

  getProduct(id: number): Observable<IProduct> {
    return this.getProducts()
      .map((products: IProduct[]) => products.find(p => p.productId === id));
  }

  getProductName(name: string): Observable<IProduct> {
    return this.getProducts()
      .map((products: IProduct[]) => products.find(p => p.productName === name));
  }

}