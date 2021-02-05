import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrendingComponent } from './trending/trending.component'; 
import { SearchComponent } from './search/search.component'; 
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: TrendingComponent }, 
  { path: 'search', component: SearchComponent }, 
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
