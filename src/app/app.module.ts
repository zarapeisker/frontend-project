import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WelcomeModule} from './welcome/welcome.module';
import {UserModule} from './user/user.module';
import {AppComponent} from './app.component/app.component';
import {PageNotFoundComponent} from './pagenotfound.component/pagenotfound.component';
import {CallbackComponent} from './callback.component/callback.component';
import {LogoComponent} from './logo.component/logo.component';

import {AuthService} from './services/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    WelcomeModule,
    UserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CallbackComponent,
    PageNotFoundComponent,
    LogoComponent
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }



