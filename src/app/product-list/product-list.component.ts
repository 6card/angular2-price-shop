import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product, ProductService } from '../shared/product.service';
import { OrderByPipe } from "../order-by.pipe"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private loading: boolean = false;
  private products: Product[];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.loading = true;
    this.productService.getAll().subscribe( data => {
      this.loading = false;
      this.products = data;
    });
  }

}
