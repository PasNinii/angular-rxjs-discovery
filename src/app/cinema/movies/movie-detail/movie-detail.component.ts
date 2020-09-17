import { Component, OnInit } from '@angular/core';
import { MovieService } from 'app/services/movie.service';
import { Observable } from 'rxjs';
import { MovieInterface, Video } from 'app/interfaces/movie/movieInterface';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {


  movie$: Observable<MovieInterface>;
  videos$: Observable<Video[]>;

  movieId: MovieInterface;
  id$: any;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private service: MovieService
             ) { }

  ngOnInit() {

    this.movie$ = this.route.paramMap.pipe(
      switchMap( ( params: ParamMap ) =>
        this.service.getMovie( params.get( 'id' ) ) )
    );

    this.videos$ = this.route.paramMap.pipe(
      switchMap( ( params: ParamMap ) =>
        this.service.getVideos( params.get( 'id' ) ) )
    );
  }



}
