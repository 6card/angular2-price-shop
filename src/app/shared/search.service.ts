import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs';

export class SearchItem {
  constructor(
    public track: string,
    public artist: string,
    public link: string,
    public thumbnail: string,
    public artistId: string) {
  }
}

@Injectable()
export class SearchService {
  apiRoot:string = 'https://itunes.apple.com/search';
  results:Object[];
  loading:boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }
  search(term:string): Observable<SearchItem[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;/*&callback=JSONP_CALLBACK*/
    return this.http.get(apiURL)
      .map(res => {
        return res.json().results.map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      });


/*
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.results = res.json().results;
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
    */
  }

}
