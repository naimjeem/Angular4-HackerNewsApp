import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { HackerNewsService } from './hacker-news/hacker-news.service';

@NgModule({
  declarations: [
    AppComponent,
    HackerNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ HackerNewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
