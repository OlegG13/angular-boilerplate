import {BrowserModule} from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {
  ApiService,
  JwtService,
  UserService,
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import {RouterModule} from '@angular/router';
import {AuthModule} from './auth/auth.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    rootRouting,
    BrowserModule,
    SharedModule,
    AuthModule
  ],
  providers: [
    ApiService,
    JwtService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
