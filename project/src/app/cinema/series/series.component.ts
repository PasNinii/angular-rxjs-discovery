import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
