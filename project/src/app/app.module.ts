/* Basic Import */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Local Import*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular Material Import */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MoviesComponent } from './cinema/movies/movies.component';
import { SeriesComponent } from './cinema/series/series.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/moviesnow', pathMatch: 'full' },
  { path: 'moviesnow', component: MoviesComponent},
  { path: 'series', component: SeriesComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ RouterModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
