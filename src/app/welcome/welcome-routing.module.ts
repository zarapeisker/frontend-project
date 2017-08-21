import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {WelcomeStudentsComponent} from './welcome.students.component/welcome.students.component';
import {WelcomeTutorsComponent} from './welcome.tutors.component/welcome.tutors.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'welcome/students', component: WelcomeStudentsComponent},
      {path: 'welcome/tutors', component: WelcomeTutorsComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class WelcomeRoutingModule { }
