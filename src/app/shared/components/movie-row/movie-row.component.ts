import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector:'[movieRow]',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {

  private movie: any;
  @Input() movieRow: Movie;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {}
    
	
}
