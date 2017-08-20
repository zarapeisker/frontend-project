import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {UserListComponent} from './user-list.component/user-list.component';
import {ProfileComponent} from './profile.component/profile.component';
import {SessionsListComponent} from './sessions-list.component/sessions-list.component';
import {MessageListComponent} from './message-list.component/message-list.component';
import {MessageComponent} from './message.component/message.component';
import {SessionComponent} from './session.component/session.component';
import {VideochatComponent} from './videochat.component/videochat.component';
import {ComicPanelComponent} from './comic-panel.component/comic-panel.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {path: 'profile', component: ProfileComponent},
      {path: 'sessions-list', component: SessionsListComponent},
      {path: 'message', component: MessageComponent},
      {path: 'session', component: SessionComponent},
      {path: 'videochat', component: VideochatComponent}
    ]),
  ],
  declarations: [
    UserListComponent,
    ProfileComponent,
    SessionsListComponent,
    MessageListComponent,
    MessageComponent,
    SessionComponent,
    VideochatComponent,
    ComicPanelComponent
  ],
  exports: [
    UserListComponent,
    ProfileComponent,
    SessionsListComponent,
    MessageListComponent,
    MessageComponent,
    SessionComponent,
    VideochatComponent,
    ComicPanelComponent
  ]
})

export class TileHelperModule { }

