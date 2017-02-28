import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Shop, ShopService } from '../shared/shop.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {

  private loading: boolean = false;
  private shop: Shop;

  constructor(private route: ActivatedRoute,
              private shopService:ShopService) {
    //this.route.params.subscribe( params => this.getShopsById(params['id']));
    this.getShopsById(this.route.snapshot.params['id']);

  }

  ngOnInit() {
  }

  getShopsById(id: number) {
    this.loading = true;
    this.shopService.getById(id).subscribe( data => {
      this.loading = false;
      this.shop = data;
    });
  }


}
