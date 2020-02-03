import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonServiceService } from './services/pokemon-service.service';
import { Observable, BehaviorSubject, combineLatest, empty } from 'rxjs';
import { ResultApi } from './interface/resultApi';
import { map, flatMap, expand, concatMap, concat, scan } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Poké';
  show = false;

  pokemons$: Observable<ResultApi[]>;
  pokemonDetail$: Observable<{}>;

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
      scan((acc, data) => {
        return [...acc, ...data];
      }, [])
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
