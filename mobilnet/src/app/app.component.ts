import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as mobilenet from '@tensorflow-models/mobilenet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'mobilnet';

  @ViewChild('video', {static: true}) video: ElementRef;

  model: any;
  loading: boolean;

  img: any;
  imgSrc: any;
  predictions: any;

  constructor() { }

  async ngOnInit() {
    this.loading = true;
    this.model = await mobilenet.load();
    this.loading = false;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  async ngAfterViewInit() {
    const vid = this.video.nativeElement;

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          vid.srcObject = stream;

        })
        .catch((err0r) => {
          console.log('Something went wrong!');
        });
    }

    setInterval(async () => {
      this.predictions = await this.model.classify(this.video.nativeElement);
   }, 3000);

  }
}
