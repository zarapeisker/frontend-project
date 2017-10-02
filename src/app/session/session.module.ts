import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SessionListComponent} from './session-list.component/session-list.component';
import {SessionDetailComponent} from './session.component/session.component';
import {SharedModule} from '../shared/shared.module';

@NgModule ({
  imports: [
    SharedModule,
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
