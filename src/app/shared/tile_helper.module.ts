import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {FeatureTileComponent} from './feature-tile.component/feature-tile.component';
import {GetStartedTileComponent} from './get-started.component/get-started-tile.component';
import {TestimonialTileComponent} from './testimonial-tile.component/testimonial-tile.component';
import {SearchTileComponent} from './search-tile.component/search-tile.component';
import {TitleTileComponent} from './title-tile.component/title-tile.component';
import {UserListComponent} from './user-list.component/user-list.component';
import {ProfileComponent} from './profile.component/profile.component';
import {SessionsListComponent} from './sessions-list.component/sessions-list.component';
import {StudentHomeComponent} from '../students/student-home.component/student-home.component';
import {MessageListComponent} from './message-list.component/message-list.component';
import {MessageComponent} from './message.component/message.component';
import {SessionComponent} from './session.component/session.component';
import {VideochatComponent} from './videochat.component/videochat.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {path: 'user-list', component: UserListComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'sessions-list', component: SessionsListComponent},
      {path: 'student-home', component: StudentHomeComponent},
      {path: 'message', component: MessageComponent},
      {path: 'session', component: SessionComponent},
      {path: 'videochat', component: VideochatComponent}
    ]),
  ],
  declarations: [
    FeatureTileComponent,
    GetStartedTileComponent,
    TestimonialTileComponent,
    SearchTileComponent,
    TitleTileComponent,
    UserListComponent,
    ProfileComponent,
    SessionsListComponent,
    MessageListComponent,
    MessageComponent,
    SessionComponent,
    VideochatComponent
  ],
  exports: [
    FeatureTileComponent,
    GetStartedTileComponent,
    TestimonialTileComponent,
    SearchTileComponent,
    TitleTileComponent,
    UserListComponent,
    ProfileComponent,
    SessionsListComponent,
    MessageListComponent,
    MessageComponent,
    SessionComponent,
    VideochatComponent
  ]
})

export class TileHelperModule { }

