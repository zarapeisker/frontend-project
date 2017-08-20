import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component/app.component';
import {PageNotFoundComponent} from './pagenotfound.component/pagenotfound.component';
import {HomeComponent} from './marketing/home.component/home.component';

import {MarketingModule} from './marketing/marketing.module';
import {StudentModule} from './main/student/student.module';
import {TutorModule} from './main/tutor/tutor.module';
import {LoginModule} from './login/login.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    NgbModule.forRoot(),
    MarketingModule,
    StudentModule,
    TutorModule,
    LoginModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }



