import {Component} from '@angular/core';

@Component ({
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss']
})

export class ProfileComponent {
  user: Object = {
      first_name: 'Cynthia',
      last_name: 'Tan',
      linkedIn_profile: 'cynthiatan@linkedin',
      description: 'I am a mechanical engineer.',
      time_zone: 'EST',
      languages: ['English', 'Mandarin Chinese'],
      country_from: 'USA',
      country_living: 'New York, USA',
      organization: 'American Society of Mechanical Engineers',
      reviews: ['She is great!', 'Cynthia is awesome!']
  };
}
