import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { exampleMovies } from '../examples';
import { Movie } from '../models/movie.model';

@Injectable()
export class MoviesService {

  constructor() { }

  public getMovies()
  {
  	let movies: Movie[] = [];
  	return new Observable((o: Observer<any>) => {
  		exampleMovies.forEach(movie =>{
  			movies.push(new Movie(
  				movie.id,
  				movie.name,
  				movie.director,
  				movie.imageUrl,
  				movie.duration,
  				movie.releaseDate,
  				movie.genres
  				)
  			);
  		});
  		o.next(movies);
  		o.complete();
  	});

  }

  search($term) {
        let movies: Movie [] = [];;
        return new Observable((o: Observer<any>) => {
            exampleMovies.forEach(movie => {
                if (movie.name.match($term)) {
                    movies.push(movie);
                }
            });
            o.next(movies);
            o.complete();
            });
    }




}
