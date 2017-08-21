import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SessionListComponent} from './session-list.component/session-list.component';
import {SessionDetailComponent} from './session.component/session.component';
import {CommonModule} from '@angular/common';

@NgModule ({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'sessions/:id', component: SessionDetailComponent}
    ])
  ],
  declarations: [
    SessionDetailComponent,
    SessionListComponent
  ],
  exports: [
    SessionListComponent
  ]
})

export class SessionModule { }
