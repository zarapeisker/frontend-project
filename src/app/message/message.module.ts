import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MessageListComponent} from './message-list.component/message-list.component';
import {MessageComponent} from './message.component/message.component';
import {CommonModule} from '@angular/common';

@NgModule ({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'message', component: MessageComponent},
    ])
  ],
  declarations: [
    MessageComponent,
    MessageListComponent
  ],
  exports: [
    MessageListComponent
  ]
})

export class MessageModule {

}
