import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs';

export class ShopItem {
  constructor(public id: number,
              public name: string,
              public description: string,
              public adress: string) {
  }
}

@Injectable()
export class ShopService {
  apiRoot:string = 'http://6card.tk/api/shops';
  constructor(private http: Http) { 

  }

  getAll(): Observable<ShopItem[]> {
    let apiURL = `${this.apiRoot}`;/*&callback=JSONP_CALLBACK*/
    return this.http.get(apiURL)
      .map(res => {
        return res.json().map(item => {
          return new ShopItem(
            item.id,
            item.name,
            item.description,
            item.adress
          );
        });
      });
  }
}
