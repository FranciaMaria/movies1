import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
   private movie: any;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { 

  }

  ngOnInit() {

  	this.moviesService.getMovies().subscribe(data => {
 
  		this.movies = data;
	  });

    this.route.params.subscribe(() => {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));

      this.movie = [];
      this.moviesService.getMovies()
        .subscribe((data: any[]) => {
          this.movie = data.find(item => item['id'] == id);

        });
      
      });

  }

}
