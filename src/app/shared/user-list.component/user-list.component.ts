import {Component} from '@angular/core';

@Component ({
  moduleId: module.id,
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss']
})

export class UserListComponent {
  users: Array<object> = [
    {
      first_name: 'Aaron',
      last_name: 'Jones',
      description: 'I am a middle school English teacher.',
      image: '../../../assets/images/tutor_3.jpg',
      background: '../../../assets/images/blue_bolt_burst_bg.png',
      buttonDisabled: true
    },
    {
      first_name: 'Cynthia',
      last_name: 'Tan',
      description: 'I am a mechanical engineer.',
      image: '../../../assets/images/tutor_4.jpg',
      background: '../../../assets/images/blue_bolt_burst_bg.png',
      buttonDisabled: false
    },
    {
      first_name: 'Jeremy',
      last_name: 'Kraynak',
      description: 'I am a retired astrophysicist.',
      image: '../../../assets/images/tutor_2.jpg',
      background: '../../../assets/images/blue_bolt_burst_bg.png',
      buttonDisabled: true
    },
    {
      first_name: 'Lily',
      last_name: 'Summers',
      description: 'I am a certified history teacher.',
      image: '../../../assets/images/tutor_close.jpg',
      background: '../../../assets/images/blue_bolt_burst_bg.png',
      buttonDisabled: true
    }
  ];
}
