import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from './services/pokemon-service.service';
import { Observable, BehaviorSubject, combineLatest, empty } from 'rxjs';
import { ResultApi } from './interface/resultApi';
import { map, flatMap, expand, concatMap, concat } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Poké';
  show = false;

  pokemons$: Observable<ResultApi>;
  pokemonDetail$: Observable<{}>;

  pokemons: ResultApi[] = [];

  pokemonSelected$ = new BehaviorSubject( null );

  constructor( private service: PokemonServiceService ) { }

  ngOnInit( ): void {
    this.pokemons$ = this.service.getPokemon(  ).pipe(
      expand(
        // tslint:disable-next-line: deprecation
        ({ next }) => (next ? this.service.getPokemon( next ) : empty( ) ),
      ),
      map(
        result => {
          return result.results;
        }
      ),
      concat(
        ( results ) => {
          results.map( res => this.pokemons.push( res ) );
          return results;
        })
      );

    this.pokemonDetail$ = this.pokemonSelected$.pipe(
      flatMap(
        (pokemonSelected) => {
          return this.service.getPokemonDetail( pokemonSelected.url );
        }
      )
    );
  }

  getInfo( pokeName: ResultApi ): void {
    this.show = true;
    this.pokemonSelected$.next( pokeName );
  }
}


/*

import { Observable } from "rxjs/Observable";
import { ajax } from "rxjs/observable/dom/ajax";
import { AjaxResponse } from "rxjs/observable/dom/AjaxObservable";
import { map } from "rxjs/operators";

export function get(
  url: string
): Observable<{
  content: object[];
  next: string | null;
}> {
  return ajax.get(url).pipe(
    map(response => ({
      content: response.response,
      next: next(response),
    }))
  );
}

function next(response: AjaxResponse): string | null {
  let url: string | null = null;
  const link = response.xhr.getResponseHeader("Link");
  if (link) {
    const match = link.match(/<([^>]+)>;\s*rel="next"/);
    if (match) {
      [, url] = match;
    }
  }
  return url;
}



import { empty } from "rxjs/observable/empty";
import { concatMap, expand } from "rxjs/operators";
import { get } from "./get";

const url = "https://api.github.com/users/sindresorhus/repos";
const repos = get(url).pipe(
  expand(({ next }) => (next ? get(next) : empty())),
  concatMap(({ content }) => content)
);
repos.subscribe(repo => console.log(repo));
*/
