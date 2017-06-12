import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {HomeComponent} from './home/home.component';
import {MaterialHelperModule} from './shared/material-helper.module';
import {StudentModule} from './students/student.module';
import {TutorModule} from './tutors/tutor.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    MaterialHelperModule,
    StudentModule,
    TutorModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }



