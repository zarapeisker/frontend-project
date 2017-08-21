import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SessionListComponent} from './session-list.component/session-list.component';
import {SessionComponent} from './session.component/session.component';
import {CommonModule} from '@angular/common';

@NgModule ({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'sessions/1', component: SessionComponent}
    ])
  ],
  declarations: [
    SessionComponent,
    SessionListComponent
  ],
  exports: [
    SessionListComponent
  ]
})

export class SessionModule { }
