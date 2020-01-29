import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Yolo';

  navLinks = [
    { path: 'moviesnow', label: 'Movies Now' },
    { path: 'series', label: 'Series' },
  ];

  constructor( ) { }

}
