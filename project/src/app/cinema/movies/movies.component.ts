import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
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

  movies$: Observable<MovieInterface[]>;
  genres$: Observable<Genre[]>;
  moviesFiltered$: Observable<MovieInterface[]>;

  genreSelected$ = new BehaviorSubject( null );

  constructor( public dialog: MatDialog, private movieService: MovieService ) { }

  ngOnInit() {

    this.movies$ = this.movieService.getMovies( 'fr', 1 );

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
  }

  genreSwap( event: any ): void {
    this.genreSelected$.next( event.value );
  }

  openDialog( movieDetail: MovieInterface ): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      data: movieDetail,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

