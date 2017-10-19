import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/examples';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

	//private movies: Array<Object>;
	private movies: Movie;

  constructor(private moviesService: MoviesService) { 

  }


  ngOnInit() {

  	this.movies = this.moviesService.getMovies().subscribe((movie: Movie) => {
 
  		this.movies = movie;
	});

  }

}
