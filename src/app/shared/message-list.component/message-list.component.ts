import {Component} from '@angular/core';

@Component ({
  moduleId: module.id,
  selector: 'app-message-list',
  templateUrl: 'message-list.component.html',
  styleUrls: ['message-list.component.scss']
})

export class MessageListComponent {
  messages: Array<object> = [
    { from: 'Lily Summers',
      text: 'Let\'s meet Wednesday at 1pm.',
      buttonText: 'Respond',
      image: '../../../assets/images/tutor_close.png',
      buttonDisabled: true
    },
    { from: 'Aaron Jones',
      text: 'How about Friday?',
      buttonText: 'Respond',
      image: '../../../assets/images/tutor_3.png',
      buttonDisabled: true
    },
    { from: 'Cynthia Tan',
      text: 'Okay, sounds good!',
      buttonText: 'View',
      image: '../../../assets/images/tutor_4.png',
      buttonDisabled: true
    },
    { from: 'Alysha Shamoon',
      text: 'Looking forward to it!',
      buttonText: 'View',
      image: '../../../assets/images/tutor_1.png',
      buttonDisabled: false
    }
  ];
}
