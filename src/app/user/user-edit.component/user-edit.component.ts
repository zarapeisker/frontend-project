import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {User} from '../user';

@Component ({
  moduleId: module.id,
  templateUrl: 'user-edit.component.html',
  styleUrls: ['user-edit.component.scss']
})

export class UserEditComponent implements OnInit {
  // defines root form model
  userForm: FormGroup;
  user: User = new User();

  timeZones: Array<string> = ['EST', 'PST'];
  // languages: Array<string> = ['English', 'Mandarin Chinese', 'Arabic'];
  // subjects: Array<string> = ['Math', 'English', 'Art History'];
  // user: any = {
  //     name: 'Cynthia Tan',
  //     email: 'cynthiatan@gmail.com',
  //     linkedin: 'cynthiatan@linkedin',
  //     description: 'I am a mechanical engineer.',
  //     time_zone: 'EST',
  //     languages: ['English', 'Mandarin Chinese'],
  //     country_from: 'China',
  //     country_present: 'United States',
  //     organization: 'American Society of Mechanical Engineers',
  //     subjects: [
  //       {
  //         'Math': {
  //           level: 'advanced',
  //           work: 4,
  //           teaching: null
  //         }
  //       },
  //       {
  //         'Art History': {
  //           level: 'beginner',
  //           work: null,
  //           teaching: 2
  //         }
  //       }
  //     ]
  // };
  errorMessage: any;
  constructor(private userService: UserService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    // the plus casts to a number instead of a string
    const id = +this.route.snapshot.params['id'];
    this.getUser(id);
    this.userForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      linkedin: new FormControl(),
      description: new FormControl(),
      time_zone: new FormControl(),
      languages: new FormControl(),
      country_from: new FormControl(),
      country_present: new FormControl(),
      organizations: new FormControl(),
      subjects: new FormControl()
    });
  }
  getUser(id: number) {
    this.userService.getUser(id)
      .subscribe(
        user => {
          // this.user = user;
          console.log(user);
        },
        error => this.errorMessage = <any>error
      );
  }
  save() {
    console.log(this.userForm);
    // console.log(this.userForm.get('name').errors.required);
    // console.log(this.userForm.get('email').errors.required);
    // console.log('Saved: ' + JSON.stringify(this.userForm.value));
  }
}


