import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieInterface, Genre } from '../cinema/movies/movieInterface';
import { map } from 'rxjs/operators';

interface MovieResponse {
  results: MovieInterface[];
}

interface GenreResponse {
  genres: Genre[];
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private urlMovieHttps = 'https://api.themoviedb.org/3/movie/';

  private apiKey = 'a7846fa6179662a8e7e5da4093c5dbd5';

  constructor( private http: HttpClient ) { }

  getMovie( movieId: number, language: string ): Observable<MovieInterface> {
    return this.http.get<MovieInterface>( `${this.urlMovieHttps}${movieId}?api_key=${this.apiKey}&language=${language}`);
  }

  getMovies( language: string, page: number): Observable<MovieInterface[]> {
    return this.http.get<MovieResponse>(`${this.urlMovieHttps}now_playing?api_key=${this.apiKey}&$language=${language}$page=${page}`).pipe(
      map(
        ( value ) => value.results
      )
    );
  }

  getGenres( ): Observable<Genre[]> {
    return this.http.get<GenreResponse>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`).pipe(
      map(
        ( value ) => value.genres
      )
    );
  }

}
