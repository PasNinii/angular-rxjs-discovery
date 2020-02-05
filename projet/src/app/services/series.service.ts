import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TVSeries } from '../cinema/series/series.component'

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private url = 'https://api.themoviedb.org/3/tv/';
  private searchUrl = 'https://api.themoviedb.org/3/search/tv';
  private apiKey = 'a7846fa6179662a8e7e5da4093c5dbd5';

  constructor( private http: HttpClient ) { }

  getSeries( serieId: number, language: string ): Observable<TVSeries> {
    return this.http.get<TVSeries>( `https://api.themoviedb.org/3/tv/${serieId}?api_key=${this.apiKey}&language=${language}`);
  }


}
