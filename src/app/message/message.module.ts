import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MessageListComponent} from './message-list.component/message-list.component';
import {MessageDetailComponent} from './message.component/message.component';
import {SharedModule} from '../shared/shared.module';

@NgModule ({
  imports: [
    SharedModule,
    // CommonModule,
    RouterModule.forChild([
      {path: 'messages/:id', component: MessageDetailComponent},
    ])
  ],
  declarations: [
    MessageDetailComponent,
    MessageListComponent
  ],
  exports: [
    MessageListComponent
  ]
})

export class MessageModule {

}
