import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MovieInterface, Genre } from './movieInterface';
import { flatten } from 'underscore';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  selected = '';
  urlImages = 'https://image.tmdb.org/t/p/original/';

  movies$: Observable<MovieInterface[]>;
  genres$: Observable<Genre[]>;
  moviesFiltered$: Observable<MovieInterface[]>;

  genreSelected$ = new BehaviorSubject( null );

  constructor( private movieService: MovieService ) { }

  ngOnInit() {

    this.movies$ = this.movieService.getMovies( 'fr', 1 );

    this.genres$ = this.movieService.getGenres( );

    this.moviesFiltered$ = combineLatest( this.movies$, this.genreSelected$ ).pipe(
      map(
        ( moviesList, genreId ) => {
          return moviesList.filter(
            ( movies ) => {
              if ( movies ) {
                console.log( genreId );
                return movies.map( movie => movie.genre_ids.includes( genreId ) );
              }
            }
          );
        }
      ),
    );
  }

  genreSwap( event: any ): void {
    this.genreSelected$.next( event.value );
  }
}

