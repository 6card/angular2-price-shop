import { Component, OnInit } from '@angular/core';
import { Price } from '../shared/price';
import { SearchItem, SearchService } from '../shared/search.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  prices: Price[];
  private loading: boolean = false;
  private results: SearchItem[];

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
    this.loading = true;
    this.itunes.search(term).subscribe( data => {
      this.loading = false;
      this.results = data;
    });
  }

}
