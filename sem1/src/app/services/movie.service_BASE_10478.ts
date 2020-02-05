import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MovieInterface, MoviesResponse, Genre, GenreResponse, Video, Videos } from '../interfaces/movie/movieInterface';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private urlMovieHttps = 'https://api.themoviedb.org/3/movie/';

  private apiKey = 'a7846fa6179662a8e7e5da4093c5dbd5';
  private language = 'en-US';

  constructor( private http: HttpClient ) { }

  getMovie( movieId: number ): Observable<MovieInterface> {
    return this.http.get<MovieInterface>( `${this.urlMovieHttps}${movieId}?api_key=${this.apiKey}&language=${this.language}`);
  }

  getMovies( page: number ): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${this.urlMovieHttps}popular?api_key=${this.apiKey}&language=${this.language}&page=${page}`);
  }

  getGenres( ): Observable<Genre[]> {
    return this.http.get<GenreResponse>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`).pipe(
      map(
        ( response ) => response.genres
      )
    );
  }

  getVideos( movieId: number ): Observable<Video[]> {
    return this.http.get<Videos>( `${this.urlMovieHttps}${movieId}/videos?api_key=${this.apiKey}&language=${this.language}` ).pipe(
      map(
        ( response ) => response.results
    ) );
  }

}
