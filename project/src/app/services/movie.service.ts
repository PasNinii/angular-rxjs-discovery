import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'https://api.themoviedb.org/3/movie/';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = 'a7846fa6179662a8e7e5da4093c5dbd5';


  constructor( private http: HttpClient ) { }

  getImages( language: string ): Observable<any> {
    return this.http.get<any>( `${this.url}popular?api_key=${this.apiKey}&language=${language}` );
  }

}
