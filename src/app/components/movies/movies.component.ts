import { Component, OnInit } from '@angular/core';
import { exampleMovies } from '../../shared/examples';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

	//private movies: Array<Object>;
	private movies: Movie[] = [];

  constructor(private moviesService: MoviesService) { 

  }

  ngOnInit() {

  	this.moviesService.getMovies().subscribe(data => {
 
  		this.movies = data;
	});

  }

}
