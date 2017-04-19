import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HeartComponent} from "./TwitterMock.component.ts/heart.component";
import {TwitterFrameComponent} from "./TwitterMock.component.ts/twitterFrame.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  HeartComponent,
                  TwitterFrameComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
