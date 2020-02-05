import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../../../services/movie.service';
import { map, expand, scan, take, debounceTime, flatMap } from 'rxjs/operators';
import { Credits, Crew, Cast, MovieInterface } from './../../../../interfaces/movie/movieInterface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-casting',
  templateUrl: './casting.component.html',
  styleUrls: ['./casting.component.scss']
})
export class CastingComponent implements OnInit {

  @Input( ) movie$: Observable<MovieInterface>;

  // credits$  : Observable<Credits[]>
  crew$: Observable<Crew[]>;
  cast$: Observable<Cast[]>;

  constructor( private router: Router, public dialog: MatDialog, private movieService: MovieService ) { }

  ngOnInit() {

    this.crew$ = this.movie$.pipe(
      flatMap( movie => {
        return this.movieService.getCrew( movie.id );
      } )
    );

    this.cast$ = this.movie$.pipe(
      flatMap( movie => {
        return this.movieService.getCast( movie.id );
      } )
    );
  }

}
