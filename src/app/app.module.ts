import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { WhiteBoardComponent } from './white-board/white-board.component';
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }