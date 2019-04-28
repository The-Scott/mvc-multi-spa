import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {KitcheSink} from './modules/kitchensink/kitchensink.component';
import {AppRoutingModule} from './app.routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppHttpInterceptor} from './interceptors/subdir-intercepter';
import {AngularHome} from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
      KitcheSink,
      AngularHome
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/' + (window.location.pathname.split('/')[1] || '')
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
