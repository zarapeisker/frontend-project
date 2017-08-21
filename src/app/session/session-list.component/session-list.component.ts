import {Component} from '@angular/core';

@Component ({
  moduleId: module.id,
  selector: 'app-session-list',
  templateUrl: 'session-list.component.html',
  styleUrls: ['session-list.component.scss']
})

export class SessionListComponent {
  sessions: Array<object> = [
    {
      tutor: 'Jeremy Kraynak',
      appointment: 'September 1, 2017 at 3:00pm',
      image: '../../../assets/images/tutor_2.jpg',
      buttonDisabled: false
    },
    {
      tutor: 'Alysha Shamoon',
      appointment: 'August 5, 2017 at 5:00pm',
      image: '../../../assets/images/tutor_1.jpg',
      buttonDisabled: true
    },
    {
      tutor: 'Aaron Jones',
      appointment: 'August 6, 2017 at 1:00pm',
      image: '../../../assets/images/tutor_3.jpg',
      buttonDisabled: true
    },
    {
      tutor: 'Cynthia Tan',
      appointment: 'August 31, 2017 at 12:00pm',
      image: '../../../assets/images/tutor_4.jpg',
      buttonDisabled: true
    }
  ];
}
