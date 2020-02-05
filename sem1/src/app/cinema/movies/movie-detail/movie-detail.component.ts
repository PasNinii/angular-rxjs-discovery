import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'app/services/movie.service';
import { Observable } from 'rxjs';
import { MovieInterface, Video } from 'app/interfaces/movie/movieInterface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {


  movie$: Observable<MovieInterface>;
  videos$: Observable<Video[]>;

  movieId: MovieInterface;

  constructor( private router: Router, private service: MovieService ) {
    console.log( this.router.getCurrentNavigation( ).extras.state );
  }

  ngOnInit() {

    this.movieId = history.state;

    this.movie$ = this.service.getMovie( this.movieId.id );

    this.videos$ = this.service.getVideos( this.movieId.id );
  }



}
