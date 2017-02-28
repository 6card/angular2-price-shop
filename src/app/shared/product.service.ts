import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs';

export class Product {
  constructor(public id: number,
              public name: string,
              public code: number) {
  }
}

@Injectable()
export class ProductService {
  apiRoot:string = 'http://6card.tk/api/products';
  constructor(private http: Http) { }

  getAll(): Observable<Product[]> {
    let apiURL = this.apiRoot;
    return this.http.get(apiURL)
      .map(res => {
        return res.json().map(item => {
          return new Product(
            item.id,
            item.name,
            item.code
          );
        });
      });
  }

}
