/* Basic Import */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Local Import*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular Material Import */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MoviesComponent } from './cinema/movies/movie/movies.component';
import { SeriesComponent } from './cinema/series/series.component';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './ngeneral/navigation/navigation.component';
import { MovieDetailComponent } from './cinema/movies/movie-detail/movie-detail.component';
import { SafePipe } from './pipe/safePipe';
import { CastingComponent } from './cinema/movies/tabs/casting/casting.component';
import { BandeaComponent } from './cinema/movies/tabs/bandea/bandea.component';
import { InfoComponent } from './cinema/movies/tabs/info/info.component';

export const routes: Routes = [
  { path: '', redirectTo: '/moviesnow', pathMatch: 'full' },
  { path: 'moviesnow', component: MoviesComponent},
  { path: 'series', component: SeriesComponent},
  { path: 'moviesnow/moviedetail', component: MovieDetailComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SeriesComponent,
    NavigationComponent,
    MovieDetailComponent,
    SafePipe,
    CastingComponent,
    BandeaComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  entryComponents: [ MoviesComponent ],
  providers: [ RouterModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
