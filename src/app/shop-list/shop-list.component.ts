import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShopItem, ShopService } from '../shared/shop.service';
import { OrderByPipe } from "../order-by.pipe"

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  private loading: boolean = false;
  private shops: ShopItem[];

  constructor(private shopService:ShopService) { }

  ngOnInit() {
    this.getAllShops();
  }

  getAllShops() {
    this.loading = true;
    this.shopService.getAll().subscribe( data => {
      this.loading = false;
      this.shops = data;
    });
  }

  handleShopAdded(shop) {
    // Handle the event
     this.shops.push(shop);
  }

}
