import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Info } from '../interface/resultApi';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  urlAPI = 'https://pokeapi.co/api/v2';

  constructor( private http: HttpClient ) { }

  getPokemon( next = `${this.urlAPI}/pokemon` ): Observable<Info> {
    return this.http.get<Info> (  `${next}` );
  }

  getPokemonDetail( url: string ): Observable<any> {
    return this.http.get<any> ( `${url}` );
  }
}
