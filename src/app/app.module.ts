import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {MarketingModule} from './marketing/marketing.module';
import {HomeComponent} from './marketing/home.component/home.component';
import {StudentModule} from './main/student/student.module';
import {TutorModule} from './main/tutor/tutor.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginModule} from './login/login.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    MarketingModule,
    StudentModule,
    TutorModule,
    LoginModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }



