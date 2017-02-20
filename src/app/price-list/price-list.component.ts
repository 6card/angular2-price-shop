import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Price } from '../shared/price';
import { SearchItem, SearchService } from '../shared/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  prices: Price[];

  private loading: boolean = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes:SearchService) { 
    this.prices = [
      {
        name: "Молоко",
        price: 37,
      },
      {
        name: "Мука",
        price: 56,
      },
    ]
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do( _ => this.loading = true)
      //.map( term => this.itunes.search(term))
      .switchMap( term => this.itunes.search(term))      
      .do( _ => this.loading = false )
      //.subscribe( value => console.log(value)) // Need to call subscribe to make it hot!
  }

  doSearch(term: string) {
    this.results = this.itunes.search(term);
  }

}
