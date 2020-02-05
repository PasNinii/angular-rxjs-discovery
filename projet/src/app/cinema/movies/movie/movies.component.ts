import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { Observable, BehaviorSubject, combineLatest, empty } from 'rxjs';
import { map, expand, scan, take, debounceTime } from 'rxjs/operators';
import { MoviesInterface, Genre, MovieInterface } from '../../../interfaces/movie/movieInterface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  selected = '';
  page = 1;

  movies$: Observable<MoviesInterface[]>;
  genres$: Observable<Genre[]>;

  totalPages = 10; // 499 max

  moviesFiltered$: Observable<MoviesInterface[]>;

  genreSelected$ = new BehaviorSubject( null );

  search$ = new BehaviorSubject<string>( null );
  searchString: string;

  constructor( private movieService: MovieService ) { }

  ngOnInit() {

    this.movies$ = this.movieService.getMovies( this.page ).pipe(
      expand(
        ({ }) => {
          this.page += 1;
          // tslint:disable-next-line: deprecation
          return ( this.page ? this.movieService.getMovies( this.page ) : empty( ) );
        }
      ),
      take( this.totalPages ),
      map(
        result => {
          return result.results;
        }
      ),
      scan( ( acc, data ) => {
        return [...acc, ...data];
      }, [] )
    );

    this.genres$ = this.movieService.getGenres( );

    this.moviesFiltered$ = combineLatest( this.movies$, this.genreSelected$, this.search$.pipe( debounceTime( 10 ) ) ).pipe(
    map(
      ( [moviesList, genreSelected, search] ) => {
      return moviesList.filter( movie => {
        if ( !genreSelected ) {
          return true;
        }
        return movie.genre_ids.includes( genreSelected );
      } ).filter( movie => {
        if ( !search ) {
          return true;
        }
        return movie.title.includes( search )
        }
      );
    } ) );
  }

  genreSwap( event: any ): void {
    this.genreSelected$.next( event.value );
  }

  searchMovie( event: any ): void {
    this.search$.next( event );
  }
}

