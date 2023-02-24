import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnglishComponent } from './components/english/english.component';
import { CountryCodesComponent } from './components/country-codes/country-codes.component';
import { SpanishComponent } from './components/spanish/spanish.component';

@NgModule({
  declarations: [
    AppComponent,
    EnglishComponent,
    CountryCodesComponent,
    SpanishComponent
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
