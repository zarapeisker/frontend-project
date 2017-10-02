import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component/home.component';
import {TutorListComponent} from './tutor-list.component/tutor-list.component';
import {UserDetailComponent} from './user-detail.component/user-detail.component';
import {UserEditComponent} from './user-edit.component/user-edit.component';
import {UserEditGuard} from './user-guard.service';


@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'home', component: HomeComponent},
      {path: 'tutors', component: TutorListComponent},
      {path: 'users/:id', component: UserDetailComponent},
      {path: 'users/:id/edit',
        canDeactivate: [UserEditGuard],
        component: UserEditComponent}
    ]),
  ],
  exports: [
    RouterModule
  ]
})

export class UserRoutingModule { }
