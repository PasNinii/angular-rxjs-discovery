import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MoviesInterface } from '../../../interfaces/movie/movieInterface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: MoviesInterface) {
    console.log( data );
  }


  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
