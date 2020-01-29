/* Basic Import */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Local Import*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular Material Import */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
