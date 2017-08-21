import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TileHelperModule} from '../shared/tile_helper.module';
import {LoginComponent} from './login.component/login.component';
import {HomeComponent} from './home.component/home.component';
import {TutorListComponent} from './tutor-list.component/tutor-list.component';
import {UserComponent} from './user.component/user.component';
import {UserListComponent} from './user-list.component/user-list.component';
import {MessageModule} from '../message/message.module';
import {SessionModule} from '../session/session.module';

@NgModule ({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'tutors', component: TutorListComponent},
      {path: 'users/1', component: UserComponent},
    ]),
    TileHelperModule,
    MessageModule,
    SessionModule
  ],
  declarations: [
    LoginComponent,
    TutorListComponent,
    HomeComponent,
    UserComponent,
    UserListComponent
  ]
})

export class UserModule {

}
