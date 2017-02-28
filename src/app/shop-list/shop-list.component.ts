import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Shop, ShopService } from '../shared/shop.service';
import { OrderByPipe } from "../order-by.pipe"

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  private loading: boolean = false;
  private shops: Shop[];

  constructor(private shopService:ShopService) { }

  ngOnInit() {
    this.getAllShops();
  }

  getAllShops() {
    this.loading = true;
    this.shopService.getAll()
      .subscribe( data => {
        this.shops = data;
      }, (err) => {
          this.handleError(err);
        }, () => { // <----
          this.handleComplete();
      });
  }

  handleError(err: any) {

  }

  handleComplete() {
    this.loading = false;
  }

  handleShopAdded(shop) {
    // Handle the event
    this.shops.push(shop);
    $('#new-shop.ui.modal').modal('hide');    
  }

  onModalNew() {
    $('#new-shop.ui.modal').modal('show');
  }

}
