import { Component, OnInit } from '@angular/core';
import { Price } from '../shared/price';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  prices: Price[];
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
  }

  doSearch(term:string) {
    this.itunes.search(term)
  }

}
