import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/primeng';

import {
  ApiService,
  JwtService,
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AccordionModule
  ],
  providers: [
    ApiService,
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
