import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { provideHttpClient ,withInterceptors,withInterceptorsFromDi  } from '@angular/common/http';
import { error, interceptorInterceptor, Loading } from './interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingserviceService } from './loadingservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers:  [
    provideHttpClient(
    withInterceptors([
      interceptorInterceptor,
      Loading,
      error
    ])
  )

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
