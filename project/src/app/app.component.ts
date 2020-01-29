import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Yolo';

  items$: Observable<any>;


  constructor( db: AngularFireDatabase ) {
    this.items$ = db.object( 'Film' ).valueChanges( );
  }
}
