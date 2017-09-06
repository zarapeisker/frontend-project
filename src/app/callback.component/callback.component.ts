import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  template: ``
})

export class CallbackComponent implements OnInit {
  users: any;
  authProfile: any;
  appUser: any;
  convertedAuthProfile: any = { };
  constructor(private auth: AuthService, private userService: UserService, private router: Router) { }
  ngOnInit() {
    this.users = this.userService.allUsers();
    this.getProfile();
  }
  private getProfile() {
    if (this.auth.userProfile) {
      this.authProfile = this.auth.userProfile;
      this.convertAuthProfile();
      if (this.authProfile.email && this.users) {
        this.findUser();
      } else {
        console.log('no email for this profile, no profile, or no users array');
      }
    } else {
      this.auth.getProfile((err, profile) => {
        this.authProfile = profile;
        this.convertAuthProfile();
        if (this.authProfile.email && this.users) {
          this.findUser();
        } else {
          console.log('no email for this profile, no profile, or no users array');
        }
      });
    }
  }
  private findUser() {
    this.users
      .map(arrayOfObjects => arrayOfObjects
        .find(object => object.email === this.authProfile.email))
      .subscribe(userObject => {
        if (userObject) {
          this.appUser = userObject;
          this.router.navigate(['/users', this.appUser.id, 'edit']);
        } else {
          console.log('no profile match');
          this.userService.createUser(this.convertedAuthProfile)
            .subscribe(object => {
              this.router.navigate(['/users', object.id, 'edit']);
            });
        }
      });
  }
  private convertAuthProfile() {
    this.convertedAuthProfile.given_name = this.authProfile.given_name;
    this.convertedAuthProfile.family_name = this.authProfile.family_name;
    this.convertedAuthProfile.name = this.authProfile.name;
    this.convertedAuthProfile.email = this.authProfile.email;
    this.convertedAuthProfile.picture = this.authProfile.picture;
    console.log(this.convertedAuthProfile);
  }
}
