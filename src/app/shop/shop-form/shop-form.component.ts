import { NgModule, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";

import { Shop, ShopService } from '../../shared/shop.service';

class ShopForm {
  constructor(public name: string = '',
              public description: string = '',
              public adress: string = '') {
  }
}

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css']
})
export class ShopFormComponent implements OnInit {
  myform: FormGroup;

  @Output() shopAdded = new EventEmitter();

  private loading: boolean = false;

  constructor(private shopService:ShopService,
              private router: Router) {

 }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      adress: new FormControl('', [
        Validators.minLength(8),
        Validators.required
      ]),
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      let body = this.myform.value;
      //console.log(JSON.stringify(body));
      this.loading = true;
      this.shopService.addShop(body)
        .subscribe( data => {
          this.shopAdded.emit(data);          
        }, (err) => {
          this.handleError(err);
        }, () => { // <----
          this.handleComplete();
      });
      
    }
  }
  handleError(err: any) {

  }

  handleComplete() {
    this.loading = false;
    this.myform.reset();
  }

}
