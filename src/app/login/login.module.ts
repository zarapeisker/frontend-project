import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {StudentHomeComponent} from '../main/student/student-home.component/student-home.component';

@NgModule ({
  imports: [
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'student-home.component', component: StudentHomeComponent}
    ])
  ],
  declarations: [
    LoginComponent
  ]
})

export class LoginModule {

}
