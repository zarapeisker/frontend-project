import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
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
  languages: Array<string> = ['English', 'Mandarin Chinese', 'Arabic'];
  subjects: Array<string> = ['Math', 'English', 'Art History'];
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
  constructor(private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      given_name: ['', [Validators.required, Validators.minLength(3)]],
      family_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      linkedin: ['', [Validators.required, Validators.minLength(20)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      time_zone: ['', Validators.required],
      languages: ['', Validators.required],
      country_from: '',
      country_present: '',
      organizations: '',
      subjects: ['', [Validators.required]],
    });
    // the plus casts to a number instead of a string
    const id = +this.route.snapshot.params['id'];
    this.getUser(id);
  }
  private getUser(id: number) {
    this.userService.getUser(id)
      .subscribe(
        user => {
          // this.user = user;
          console.log(user);
          this.setUser(user);
        },
        error => this.errorMessage = <any>error
      );
  }
  private setUser(user) {
    this.userForm.patchValue({
      given_name: user.given_name,
      family_name: user.family_name,
      email: user.email,
      linkedin: user.linkedin,
      description: user.description,
      time_zone: user.time_zone,
      languages: user.languages,
      country_from: user.country_from,
      country_present: user.country_present,
      organizations: user.organizations,
      subjects: user.subjects
    });
  }
  save() {
    console.log(this.userForm);
    // console.log(this.userForm.get('name').errors.required);
    // console.log(this.userForm.get('email').errors.required);
    // console.log('Saved: ' + JSON.stringify(this.userForm.value));
  }
}


