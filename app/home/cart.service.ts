import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { ICart } from './cart';

@Injectable()
export class CartService {
  private _cartUrl = 'http://localhost:3004/cartProducts';

  constructor(private _http: Http) {
  }

  addCart(product: Object): Observable<ICart[]> {
    // let bodyString = JSON.stringify(product); // Stringify payload
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers}); // Create a request option

    return this._http.post(this._cartUrl, product, options) // ...using post request,options
      .map((res: Response) => <ICart[]>res.json())// ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  getCart(): Observable<ICart[]> {
    return this._http.get(this._cartUrl)
      .map((response: Response) => <ICart[]>response.json())
      .catch(this.handleError);

  }

  deleteFromCart(id): Observable<ICart[]> {
    return this._http.delete(`${this._cartUrl}/${id}`).map((response: Response) => <ICart[]>response.json())
      .catch(this.handleError);
  }

  clearCart(): Observable<ICart[]> {
    return this._http.get(this._cartUrl)
      .map((response: Response) => <ICart[]>response.json())
      .do(cart => {
        cart.map(item => {
          this.deleteFromCart(item.id);
        })
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'server error');
  }

}
