import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { exampleMovies } from './shared/examples';
import { MoviesService } from './shared/services/movies.service';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieRowComponent } from './shared/components/movie-row/movie-row.component';
import { SearchComponent } from './search/search/search.component';
import { SearchPageComponent } from './search/search/search-page/search-page.component';

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
 {
    path: 'search/:term',
    component: SearchPageComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
    MovieRowComponent,
    SearchComponent,
    SearchPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
	)
  ],
  exports: [
  	LayoutComponent, SearchComponent, SearchPageComponent, MovieRowComponent
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
