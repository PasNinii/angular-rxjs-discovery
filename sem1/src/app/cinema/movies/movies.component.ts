import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Observable, BehaviorSubject, combineLatest, empty } from 'rxjs';
import { map, expand, scan, take } from 'rxjs/operators';
import { MovieInterface, Genre } from './movieInterface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  selected = '';
  urlImages = 'https://image.tmdb.org/t/p/original/';

  page = 1;

  movies$: Observable<MovieInterface[]>;
  genres$: Observable<Genre[]>;

  totalPages = 10; // 499 max

  show = false;
  moviesFiltered$: Observable<MovieInterface[]>;

  genreSelected$ = new BehaviorSubject( null );
  search$ = new BehaviorSubject( '' );

  constructor( public dialog: MatDialog, private movieService: MovieService ) { }

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

    this.moviesFiltered$ = combineLatest( this.movies$, this.genreSelected$ ).pipe(
      map(
        ( [moviesList, genreId] ) => {
          return moviesList.filter(
            ( movie ) => {
              return movie.genre_ids.includes( genreId );
            }
          );
        }
      ),
    );

    this.moviesFiltered$ = combineLatest( this.movies$, this.search$ ).pipe(
      map(
        ( [moviesList, search] ) => {
          return moviesList.filter(
            ( movie ) => {
              return movie.title.includes( search );
            }
          );
        }
      )
    );
  }

  genreSwap( event: any ): void {
    this.show = true;
    this.genreSelected$.next( event.value );
  }

  searchMovie( event: any ): void {
    this.search$.next( event.target.value );
  }

  openDialog( movieDetail: MovieInterface ): void {
    this.dialog.open(DialogComponent, {
      width: '450px',
      data: movieDetail,
    });
  }
}

