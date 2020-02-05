import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

//const API = 'https://api.themoviedb.org/3/tv/4?api_key=a7846fa6179662a8e7e5da4093c5dbd5&language=en-US'
//const API = 'https://swapi.co/api'


/*export interface mul_genre{
	"id" : number;
	"name" : string
};

export interface SeriesTV{
"id" : number; 
"languages" : string[]; 
"name" : string; 
"number_of_episodes" : number;
"genres" : mul_genre[];
"number_of_seasons" : number;
"in_production" : boolean;
"vote_average" : number;
"poster_path" : string | null
};
*/

export interface result{ 
	poster_path : string | null
	popularity : number
	id : number
	vote_average : number
	overview : string
	first_air_date : string
	origin_country : string[]
	genre_ids : number[]
	original_language : string
	name : string
	}

export interface TVSeries {
results : result[];
}

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})

export class SeriesComponent implements OnInit {

  series$: Observable<TVSeries[]>;
  series_poster_path$: Observable<TVSeries[]>;
  series_name$: Observable<TVSeries[]>;


  private apiKey = 'a7846fa6179662a8e7e5da4093c5dbd5'
  private url = 'https://api.themoviedb.org/3/tv/top_rated?api_key='
  private url_end = '&language=en-US&page=1'
  private final_url = this.url+this.apiKey+this.url_end
  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit() {
  this.series$ = this.http.get<any>(`${this.final_url}$`).pipe(
    map(response => {
      return response.results;
    })
  );
  /*this.series_name$ = this.series$.pipe(
    map(series => {
      return series.map(
        series => series.results[-1];
      )   
    }) */
  }
}