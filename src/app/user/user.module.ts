import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TileHelperModule} from '../shared/tile_helper.module';
import {LoginComponent} from './login.component/login.component';
import {HomeComponent} from './home.component/home.component';
import {TutorListComponent} from './tutor-list.component/tutor-list.component';
import {UserDetailComponent} from './user.component/user.component';
import {UserListComponent} from './user-list.component/user-list.component';
import {MessageModule} from '../message/message.module';
import {SessionModule} from '../session/session.module';
import {UserRoutingModule} from './user-routing.module';


@NgModule ({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    TileHelperModule,
    MessageModule,
    SessionModule,
    UserRoutingModule
  ],
  declarations: [
    LoginComponent,
    TutorListComponent,
    HomeComponent,
    UserDetailComponent,
    UserListComponent
  ]
})

export class UserModule {

}
