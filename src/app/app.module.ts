import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component/app.component';
import {PageNotFoundComponent} from './pagenotfound.component/pagenotfound.component';
import {WelcomeComponent} from './welcome/welcome.component/welcome.component';

import {WelcomeModule} from './welcome/welcome.module';
import {UserModule} from './user/user.module';
import {MessageModule} from './message/message.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    NgbModule.forRoot(),
    WelcomeModule,
    UserModule,
    MessageModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }



