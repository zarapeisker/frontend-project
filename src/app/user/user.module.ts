import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TileHelperModule} from '../shared/tile_helper.module';
import {HomeComponent} from './home.component/home.component';
import {TutorListComponent} from './tutor-list.component/tutor-list.component';
import {UserDetailComponent} from './user-detail.component/user-detail.component';
import {UserListComponent} from './user-list.component/user-list.component';
import {UserEditComponent} from './user-edit.component/user-edit.component';
import {MessageModule} from '../message/message.module';
import {SessionModule} from '../session/session.module';
import {UserRoutingModule} from './user-routing.module';
import {UserService} from '../services/user.service';


@NgModule ({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    TileHelperModule,
    MessageModule,
    SessionModule,
    UserRoutingModule
  ],
  declarations: [
    TutorListComponent,
    HomeComponent,
    UserDetailComponent,
    UserListComponent,
    UserEditComponent
  ],
  providers: [
    UserService
  ]
})

export class UserModule { }
