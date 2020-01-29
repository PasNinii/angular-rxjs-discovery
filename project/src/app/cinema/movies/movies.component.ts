import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieInterface } from './movieInterface';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  urlImages = 'https://image.tmdb.org/t/p/original/';

  movies$: Observable<MovieInterface>;
  test$: Observable<any>;

  constructor( private movieService: MovieService ) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies( 32, 'fr' );
    this.test$ = this.movieService.getImages( 32, 'fr' );
  }

}
