import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,	RouterModule }	from	"@angular/router";

import { AppComponent } from './app.component';
import { PriceListComponent } from './price-list/price-list.component';
import { HomeComponent } from './home/home.component';
import { ShopListComponent } from './shop-list/shop-list.component';

import { SearchService } from './shared/search.service';
import { ShopService } from './shared/shop.service';
import { ProductService } from './shared/product.service';

import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ShopFormComponent } from './shop-form/shop-form.component';
import { OrderByPipe } from './order-by.pipe';
import { ProductListComponent } from './product-list/product-list.component';


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
    RouterModule.forRoot(routes,	{useHash:	true})
  ],
  providers: [SearchService, ShopService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
