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
import { ShopDetailComponent } from './shop-detail/shop-detail.component';


const	routes:	Routes	=	[
		{path:	'',	redirectTo:	'home',	pathMatch:	'full'},
		{path:	'find',	redirectTo:	'search'},
    {path:	'shops',	component:	ShopListComponent},
    {path:  'shop/:id', component: ShopDetailComponent},
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
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes,	{useHash:	true})
  ],
  providers: [SearchService, ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
