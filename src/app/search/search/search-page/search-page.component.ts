import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../../shared/models/movie.model';
import { MoviesService } from '../../../shared/services/movies.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  @Input() movieRow: Movie;

  private movies: Movie;
  private term : any;

    constructor(private moviesService: MoviesService,
                private route: ActivatedRoute
    ) { }

    ngOnInit() {
        let term = this.route.snapshot.paramMap.get('term');
        this.moviesService.search(term).subscribe(data => {
            this.movies = data;
            this.term = term;
        });

    }

    /*ngOnInit() {
    this.route.params.subscribe(() => {
      let id = parseInt(this.route.snapshot.paramMap.get('term'));

      this.movies = [];
      this.moviesService.getMovies()
        .subscribe((data: any[]) => {
          this.movies = data.find(item => item['term'] == 'term');

          });
        });
  }*/


}
