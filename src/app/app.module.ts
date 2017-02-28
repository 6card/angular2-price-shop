import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,	RouterModule }	from	"@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PriceListComponent } from './price-list/price-list.component';

import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { ShopDetailComponent } from './shop/shop-detail/shop-detail.component';
import { ShopFormComponent } from './shop/shop-form/shop-form.component';

import { ProductListComponent } from './product-list/product-list.component';

import { SearchService } from './shared/search.service';
import { ShopService } from './shared/shop.service';
import { ProductService } from './shared/product.service';

import { OrderByPipe } from './shared/order-by.pipe';

const	routes:	Routes	=	[
		{path:	'',	redirectTo:	'home',	pathMatch:	'full'},
		{path:	'find',	redirectTo:	'search'},
    {path:	'shops',	component:	ShopListComponent},    
    //{path:  'shop/new', component: ShopFormComponent},
    {path:  'shop/:id', component: ShopDetailComponent},

    {path:	'products',	component:	ProductListComponent}, 

		{path:	'home',	component:	HomeComponent},
		{path:	'search',	component:	PriceListComponent},
		{path:	'**',	component:	HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PriceListComponent,
    HomeComponent,
    ShopListComponent,
    ShopDetailComponent,
    ShopFormComponent,
    OrderByPipe,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes,	{useHash:	false})
  ],
  providers: [SearchService, ShopService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
