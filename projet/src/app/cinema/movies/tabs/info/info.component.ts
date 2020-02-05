import { Component, OnInit, Input } from '@angular/core';
import { MovieInterface, Keywords } from 'app/interfaces/movie/movieInterface';
import { Observable, of } from 'rxjs';
import { MovieService } from 'app/services/movie.service';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input( ) movie$: Observable<MovieInterface>;

  pokemonSelected: string;
  pokemons = ['1', '2', '3'];

  movieKeywords$: Observable<Keywords>;
  similarMovies$: Observable<MovieInterface[]>;

  urlImages = 'https://image.tmdb.org/t/p/original/';

  constructor( private service: MovieService ) { }

  ngOnInit() {
    this.movieKeywords$ = this.movie$.pipe(
      flatMap( movie => {
        return this.service.getKeywords( movie.id );
      } )
    );

    this.similarMovies$ = this.movie$.pipe(
      flatMap( movie => {
        return this.service.getSimilarMovies( movie.id );
      } )
    );
  }
}
