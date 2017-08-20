import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component/login.component';
import {RouterModule} from '@angular/router';
import {TileHelperModule} from '../shared/tile_helper.module';
import {UserHomeComponent} from './dashboard.component/user-home.component/user-home.component';
import {TutorListComponent} from './dashboard.component/tutor-list/tutor-list.component';

@NgModule ({
  imports: [
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'user-home', component: UserHomeComponent},
      {path: 'tutor-list', component: TutorListComponent}
    ]),
    TileHelperModule
  ],
  declarations: [
    LoginComponent,
    TutorListComponent,
    UserHomeComponent
  ]
})

export class UserModule {

}
