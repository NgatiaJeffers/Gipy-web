import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { GiphyService } from './giphy.service';
import { ViewerComponent } from './viewer/viewer.component';
@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    SearchComponent,
    NotFoundComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
