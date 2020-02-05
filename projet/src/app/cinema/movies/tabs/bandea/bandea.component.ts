import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'app/interfaces/movie/movieInterface';

@Component({
  selector: 'app-bandea',
  templateUrl: './bandea.component.html',
  styleUrls: ['./bandea.component.scss']
})
export class BandeaComponent implements OnInit {

  @Input( ) videos: Video[];

  urlVideo = 'https://www.youtube.com/embed/';

  constructor() { }

  ngOnInit() {
  }

}
