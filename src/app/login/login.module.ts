import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {StudentHomeComponent} from '../students/student-home.component/student-home.component';

@NgModule ({
  imports: [
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'student-home', component: StudentHomeComponent}
    ])
  ],
  declarations: [
    LoginComponent
  ]
})

export class LoginModule {

}
