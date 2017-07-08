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
      first_name: 'Melinda',
      last_name: 'Frog',
      email: 'melinda@mail.com',
      skype_id: 'melinda',
      linkedIn_profile: 'melinda@linkedIn',
      description: 'I am amazing! I am amazing! ' +
      'I am amazing! I am amazing! I am amazing! I am amazing!',
      time_zone: 'EST'
    },
    {
      first_name: 'Erica',
      last_name: 'Lion',
      email: 'erica@mail.com',
      skype_id: 'erica',
      linkedIn_profile: 'erica@linkedIn',
      description: 'I am amazing! I am amazing! ' +
      'I am amazing! I am amazing! I am amazing! I am amazing!',
      time_zone: 'PST'
    },
    {
      first_name: 'Joe',
      last_name: 'Bear',
      email: 'joe@mail.com',
      skype_id: 'joe',
      linkedIn_profile: 'joe@linkedIn',
      description: 'I am amazing! I am amazing! ' +
      'I am amazing! I am amazing! I am amazing! I am amazing!',
      time_zone: 'EST'
    },
    {
      first_name: 'Aaron',
      last_name: 'Monkey',
      email: 'aaron@mail.com',
      skype_id: 'aaron',
      linkedIn_profile: 'aaron@linkedIn',
      description: 'I am amazing! I am amazing! ' +
      'I am amazing! I am amazing! I am amazing! I am amazing!',
      time_zone: 'PST'
    }
  ];
}
