import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MessageListComponent} from './message-list.component/message-list.component';
import {MessageDetailComponent} from './message.component/message.component';
import {CommonModule} from '@angular/common';

@NgModule ({
  imports: [
    CommonModule,
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
