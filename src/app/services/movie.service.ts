import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Crew, Credits, Cast } from '../interfaces/movie/movieInterface';
import { MovieInterface, MoviesResponse, Genre, GenreResponse, Video, Videos, Keywords, SimilarResponse } from '../interfaces/movie/movieInterface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private urlMovieHttps = 'https://api.themoviedb.org/3/movie/';

  private apiKey = 'a7846fa6179662a8e7e5da4093c5dbd5';
  private language = 'en-US';

  constructor( private http: HttpClient ) { }

  getMovie( movieId: any ): Observable<MovieInterface> {
    return this.http.get<MovieInterface>( `${this.urlMovieHttps}${movieId}?api_key=${this.apiKey}&language=${this.language}`);
  }

  getMovies( page: any ): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${this.urlMovieHttps}popular?api_key=${this.apiKey}&language=${this.language}&page=${page}`);
  }

  getGenres( ): Observable<Genre[]> {
    return this.http.get<GenreResponse>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`).pipe(
      map(
        ( response ) => response.genres
      )
    );
  }

  getVideos( movieId: any ): Observable<Video[]> {
    return this.http.get<Videos>( `${this.urlMovieHttps}${movieId}/videos?api_key=${this.apiKey}&language=${this.language}` ).pipe(
      map(
        ( response ) => response.results
    ) );
  }
  getCrew( movieId: any ): Observable<Crew[]> {
    return this.http.get<Credits>( `${this.urlMovieHttps}${movieId}/credits?api_key=${this.apiKey}`).pipe(
      map(
        (response) => response.crew
      ));
  }
  getCast( movieId: any ): Observable<Cast[]> {
    return this.http.get<Credits>( `${this.urlMovieHttps}${movieId}/credits?api_key=${this.apiKey}`).pipe(
      map(
        (response) => response.cast
      ));
  }

  getKeywords( movieId: number ): Observable<Keywords> {
    return this.http.get<Keywords>( `${this.urlMovieHttps}${movieId}/keywords?api_key=${this.apiKey}&language=${this.language}` );
  }

  getSimilarMovies( movieId: number ): Observable<MovieInterface[]> {
    return this.http.get<SimilarResponse>( `${this.urlMovieHttps}${movieId}/similar?api_key=${this.apiKey}&language=${this.language}` ).pipe(
      map(
        ( response ) => response.results
      )
    );
  }

}
