import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieInterface } from '../cinema/movies/movieInterface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'https://api.themoviedb.org/3/movie/';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = 'a7846fa6179662a8e7e5da4093c5dbd5';


  constructor( private http: HttpClient ) { }

  getImages( movieId: number, language: string ): Observable<any> {
    return this.http.get<any>( `${this.url}${movieId}/images?api_key=${this.apiKey}&language=${language}` );
  }

  getMovies( movieId: number, language: string ): Observable<MovieInterface> {
    return this.http.get<MovieInterface>( `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=${language}`);
  }

}
