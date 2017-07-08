import {Component} from '@angular/core';

@Component ({
  moduleId: module.id,
  selector: 'app-message-list',
  templateUrl: 'message-list.component.html',
  styleUrls: ['message-list.component.scss']
})

export class MessageListComponent {
  messages: Array<object> = [
    { from: 'Julie Leopard',
      text: 'Let\'s meet Wednesday at 1pm.',
      buttonText: 'Respond'
    },
    { from: 'George Seagull',
      text: 'How about Friday?',
      buttonText: 'Respond'
    },
    { from: 'Molly Mantis',
      text: 'Okay, sounds good!',
      buttonText: 'View'
    },
    { from: 'Ollie Owl',
      text: 'Looking forward to it!',
      buttonText: 'View'
    }
  ];
}
