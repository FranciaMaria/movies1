import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {exampleMovies} from './shared/examples';
import { MoviesService } from './shared/services/movies.service';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieRowComponent } from './shared/components/movie-row/movie-row.component';
import { SearchComponent } from './search/search/search.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: ':id',
        component: MovieRowComponent
      }
    ]
  },
 /* {
    path: 'messages',
    component: MessagesComponent
  },*/
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
    MovieRowComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
	)
  ],
  exports: [
  	LayoutComponent, SearchComponent
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
