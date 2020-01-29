import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from './services/movie.service';
import { routes } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Yolo';

  navLinks = [
    { path: 'movies', label: 'Movies' },
    { path: 'series', label: 'Series' },
  ];


  images$: Observable<any>;


  constructor( private movieService: MovieService ) { }

  ngOnInit( ) {
    this.images$ = this.movieService.getImages( 'fr' );
  }

}
