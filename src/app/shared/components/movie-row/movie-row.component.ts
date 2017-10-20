import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-row',//'[movieRow]',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {

  private movie: any;
  private selected: boolean = false;

  @Input() movieRow: Movie;

  @Output() onSelectMovie = new EventEmitter<Movie>();
  @Output() onDeselect = new EventEmitter<Movie>();


  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {}

  selectMovie(movie: Movie) {
    this.onSelectMovie.emit(movie);
    this.selected = true;
  }

  deselectMovie(movie: Movie) {
    this.onDeselect.emit(movie);
    this.selected = false;
  }

}
