import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'graphql';

  author$: Observable<any>;

  constructor( private apollo: Apollo ) { }

  ngOnInit( ) {
    this.author$ = this.apollo.watchQuery( {
      query: gql`
      {
        authors {
          id
          displayName
        }
      }
      `,
    } ).valueChanges;
  }
}
