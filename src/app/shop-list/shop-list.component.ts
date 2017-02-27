import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShopItem, ShopService } from '../shared/shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  private loading: boolean = false;
  private shops: Observable<ShopItem[]>;

  constructor(private shopService:ShopService) { }

  ngOnInit() {
  }

  doSearch(term: string) {
    this.shops = this.shopService.getAll();
  }

}
