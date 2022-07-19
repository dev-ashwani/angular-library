import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputLibModule } from 'projects/input-lib/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InputLibModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
