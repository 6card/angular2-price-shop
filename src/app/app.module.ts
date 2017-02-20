import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import	{Routes,	RouterModule}	from	"@angular/router";

import { AppComponent } from './app.component';
import { PriceListComponent } from './price-list/price-list.component';
import { SearchService } from './shared/search.service';
import { HomeComponent } from './home/home.component';

const	routes:	Routes	=	[
		{path:	'',	redirectTo:	'home',	pathMatch:	'full'},
		{path:	'find',	redirectTo:	'search'},
		{path:	'home',	component:	HomeComponent},
		{path:	'search',	component:	PriceListComponent},
		{path:	'**',	component:	HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PriceListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes,	{useHash:	true})
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
