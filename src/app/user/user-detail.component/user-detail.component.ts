import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component ({
  moduleId: module.id,
  templateUrl: 'user-detail.component.html',
  styleUrls: ['user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  user: any = { };
  errorMessage: string;
  constructor(private route: ActivatedRoute, private userService: UserService) { }
  ngOnInit() {
    // the plus casts to a number instead of a string
    const id = +this.route.snapshot.params['id'];
    this.getUser(id);
  }
  getUser(id: number) {
    this.userService.getUser(id)
      .subscribe(
        user => this.user = user,
        error => this.errorMessage = <any>error
      );
  }

  // user: any = {
  //   name: 'Cynthia Tan',
  //   linkedIn_profile: 'cynthiatan@linkedin',
  //   description: 'I am a mechanical engineer.',
  //   time_zone: 'EST',
  //   languages: ['English', 'Mandarin Chinese'],
  //   country_from: 'USA',
  //   country_living: 'New York, USA',
  //   organization: 'American Society of Mechanical Engineers',
  //   reviews: ['She is great!', 'Cynthia is awesome!']
  // };
}
