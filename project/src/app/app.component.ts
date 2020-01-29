import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from './services/movie.service';
import { routes } from './app.module';

export interface Movies {
  adult : boolean;
  backdrop_path : string | null; 
  belongs_to_collection : boolean;
  budget : number;
  genre : 
    {
      [id : number, name : string]
    };  
  homepage : string;
  id : number;
  imdb_id : number;
  original_language : string;
  original_title : string;
  overview : string;
  popularity : number;
  poster_path : string;
  production_companies :
    {
      [id : string, logo_path : string, 
      name : string, origin_country_number : string]: 
    };
  production_country : 
    {
      [iso_3166_1 : string, name: string] 
    };
  release_date : string;
  revenue : number;
  run_time : number;
  spoken_language : 
    {
      [iso_639_1 : string, name : string]
    }; 
  status : string;
  tagline : string;
  title : string;
  video : boolean;
  vote_average : number;
  vote_count : number
}

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
