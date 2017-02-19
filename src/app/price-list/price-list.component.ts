import { Component, OnInit } from '@angular/core';
import { Price } from '../common/price';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  prices: Price[];
  constructor() { 
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

}
