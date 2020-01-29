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
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MoviesComponent } from './cinema/movies/movies.component';
import { SeriesComponent } from './cinema/series/series.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent},
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
    MatTabsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ RouterModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
