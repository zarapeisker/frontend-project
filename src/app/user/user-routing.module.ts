import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component/login.component';
import {HomeComponent} from './home.component/home.component';
import {TutorListComponent} from './tutor-list.component/tutor-list.component';
import {UserDetailComponent} from './user.component/user.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'tutors', component: TutorListComponent},
      {path: 'users/:id', component: UserDetailComponent},
    ]),
  ],
  exports: [
    RouterModule
  ]
})

export class UserRoutingModule { }
