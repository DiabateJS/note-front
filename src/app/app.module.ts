import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateNoteComponent } from './create-note/create-note.component';
import { DetailNoteComponent } from './detail-note/detail-note.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    DetailNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
