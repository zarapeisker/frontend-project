import {Component} from '@angular/core';

@Component ({
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss']
})

export class ProfileComponent {
  user: Object = {
      first_name: 'Melinda',
      last_name: 'Frog',
      linkedIn_profile: 'melinda@linkedIn',
      description: 'I am amazing! I am amazing!',
      time_zone: 'EST',
      languages: ['English', 'Arabic'],
      country_from: 'England',
      country_living: 'USA',
      organization: 'Refugee Support Org',
      reviews: ['This lady is great!', 'Melinda rocks!']
  };
}
