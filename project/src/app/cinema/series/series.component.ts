import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface mul_genre{
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


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  urlImages = 'https://image.tmdb.org/t/p/original/';

  series$: Observable<SeriesTV>;

  constructor( private SeriesService: SeriesService) { }

  ngOnInit() {
    this.series$ = this.SeriesService.getSeries( 501, 'fr' );
  }

}