import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';

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
    let apiURL = this.apiRoot;
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

  getById(id: number): Observable<ShopItem> {
    let apiURL = `${this.apiRoot}/${id}`;
    return this.http.get(apiURL)
      .map( (res:Response) => {
          let item = res.json();
          return new ShopItem(
            item.id,
            item.name,
            item.description,
            item.adress
          );
      });
  }

  addShop(shop: Object): Observable<ShopItem> {
    let apiURL = `${this.apiRoot}`;

    let bodyString = JSON.stringify(shop); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(apiURL, bodyString, options)
      .map( (res:Response) => {
          let item = res.json();
          return new ShopItem(
            item.id,
            item.name,
            item.description,
            item.adress
          );
      });
  }

}

/*
    GET /users: list all users page by page;
    HEAD /users: show the overview information of user listing;
    POST /users: create a new user;
    GET /users/123: return the details of the user 123;
    HEAD /users/123: show the overview information of user 123;
    PATCH /users/123 and PUT /users/123: update the user 123;
    DELETE /users/123: delete the user 123;
    OPTIONS /users: show the supported verbs regarding endpoint /users;
    OPTIONS /users/123: show the supported verbs regarding endpoint /users/123.
*/