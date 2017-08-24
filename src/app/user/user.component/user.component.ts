import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component ({
  moduleId: module.id,
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})

export class UserDetailComponent implements OnInit {
  profile: any;
  user: any = {
    name: 'Cynthia Tan',
    linkedIn_profile: 'cynthiatan@linkedin',
    description: 'I am a mechanical engineer.',
    time_zone: 'EST',
    languages: ['English', 'Mandarin Chinese'],
    country_from: 'USA',
    country_living: 'New York, USA',
    organization: 'American Society of Mechanical Engineers',
    reviews: ['She is great!', 'Cynthia is awesome!']
  };

  constructor(public auth: AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      console.log('inside else');
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }
  }
}
