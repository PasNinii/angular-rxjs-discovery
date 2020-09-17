import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesInterface } from 'app/interfaces/movie/movieInterface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input( ) moviesFiltered$: Observable<MoviesInterface[]>;
  urlImages = 'https://image.tmdb.org/t/p/original/';

  constructor() { }

  ngOnInit() {
  }

}
