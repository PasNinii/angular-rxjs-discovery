import { Component, OnInit, Input } from '@angular/core';
import { MovieInterface } from 'app/interfaces/movie/movieInterface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input( ) movie: MovieInterface;


  urlImages = 'https://image.tmdb.org/t/p/original/';

  constructor() { }

  ngOnInit() {
  }

}
