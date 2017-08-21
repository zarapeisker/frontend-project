import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TileHelperModule} from '../shared/tile_helper.module';
import {LoginComponent} from './login.component/login.component';
import {DashboardComponent} from './dashboard.component/dashboard.component';
import {TutorListComponent} from './tutor-list.component/tutor-list.component';
import {ProfileComponent} from './profile.component/profile.component';
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
      {path: 'dashboard', component: DashboardComponent},
      {path: 'tutor-list', component: TutorListComponent},
      {path: 'profile', component: ProfileComponent},
    ]),
    TileHelperModule,
    MessageModule,
    SessionModule
  ],
  declarations: [
    LoginComponent,
    TutorListComponent,
    DashboardComponent,
    ProfileComponent,
    UserListComponent
  ]
})

export class UserModule {

}
