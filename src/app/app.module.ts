import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {BookComponent} from './book-component/book.component';
import {BookImageComponent} from './book-image-component/book-image.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    BookComponent,
    BookImageComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
