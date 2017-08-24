import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component ({
  moduleId: module.id,
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})

export class UserDetailComponent {
  user: any;
  profile: any = {
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

  constructor(public auth: AuthService) {
    // console.log(this.auth.userProfile);
    if (this.auth.userProfile) {
      this.user = this.auth.userProfile;
    } else {
      console.log('inside else');
      this.auth.getProfile((err, profile) => {
        this.user = profile;
        console.log(this.user);
      });
    }
  }
}
