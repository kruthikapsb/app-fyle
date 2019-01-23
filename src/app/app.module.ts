import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelComponent } from './travel/travel.component';
import { RecComponent } from './rec/rec.component';
import { StickyNavModule } from 'ng2-sticky-nav';


@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    RecComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StickyNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
