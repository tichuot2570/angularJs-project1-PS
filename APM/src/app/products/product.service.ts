import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

import { IProduct } from "./product";
import { HttpErrorResponse } from "@angular/common/http/src/response";

// decorator is optional unless the service has an injected dependency of its own
@Injectable()
export class ProductService {
  private _productUrl = "./api/products/products.json";
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._http
      .get<IProduct[]>(this._productUrl)
      // stringify to display data nicer
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
