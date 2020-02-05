import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-casting',
  templateUrl: './casting.component.html',
  styleUrls: ['./casting.component.scss']
})
export class CastingComponent implements OnInit {

  @Input( ) id: number;

  constructor() { }

  ngOnInit() {
  }

}
