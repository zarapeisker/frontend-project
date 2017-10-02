import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators, AbstractControl, FormControl} from '@angular/forms';
import {User} from '../user';
import 'rxjs/add/operator/debounceTime';

function checkboxValidator(formGroup: FormGroup) {
  const controlArray = [];
  for (const control in formGroup.controls) {
    if (formGroup.get(control).value) {
      controlArray.push(control);
    }
  }
  if (controlArray.length >= 1) {
    return null;
  } else {
    return { 'checkbox': true };
  }
}

@Component ({
  moduleId: module.id,
  templateUrl: 'user-edit.component.html',
  styleUrls: ['user-edit.component.scss']
})

export class UserEditComponent implements OnInit {
  // defines root form model
  userForm: FormGroup;
  user: User = new User();
  givenNameMessage: string;
  familyNameMessage: string;
  emailMessage: string;
  linkedinMessage: string;
  timeZoneMessage: string;
  descriptionMessage: string;
  subjectsMessage: string;
  languagesMessage: string;

  private validationMessages = {
    givenName: {
      required: 'Please enter your first name.',
      minlength: 'Your first name must be at least 3 characters long.'
    },
    familyName: {
      required: 'Please enter your last name.',
      minlength: 'Your last name must be at least 3 characters long.'
    },
    email: {
      required: 'Please enter your email.',
      email: 'Please enter a valid email address.'
    },
    linkedin: {
      required: 'Please enter your LinkedIn Profile.',
      minlength: 'Please enter a valid LinkedIn profile url.'
    },
    timeZone: {
      required: 'Please select your time zone.'
    },
    description: {
      required: 'Please write a brief bio about yourself.',
      minlength: 'Your bio must be at least 20 characters long.'
    },
    subjects: {
      checkbox: 'Please check at least one subject.'
    },
    languages: {
      checkbox: 'Please check at least one language.'
    }
  };

  timeZones: Array<string> = ['EST', 'PST'];
  allLanguages: Array<string> = ['English', 'Mandarin', 'Arabic'];
  allSubjects: Array<string> = ['Math', 'English', 'Art'];
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
      languages: this.buildLanguages(),
      country_from: '',
      country_present: '',
      organizations: '',
      subjects: this.buildSubjects()
    });
    // the plus casts to a number instead of a string
    const id = +this.route.snapshot.params['id'];
    this.getUser(id);

    const givenNameControl = this.userForm.get('given_name');
    const familyNameControl = this.userForm.get('family_name');
    const emailControl = this.userForm.get('email');
    const linkedinControl = this.userForm.get('linkedin');
    const timeZoneControl = this.userForm.get('time_zone');
    const descriptionControl = this.userForm.get('description');
    const subjectsControl = this.userForm.get('subjects');
    const languagesControl = this.userForm.get('languages');
    givenNameControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setGivenNameMessage(givenNameControl));
    familyNameControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setFamilyNameMessage(familyNameControl));
    emailControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setEmailMessage(emailControl));
    linkedinControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setLinkedinMessage(linkedinControl));
    timeZoneControl.valueChanges.subscribe(value =>
      this.setTimeZoneMessage(timeZoneControl));
    descriptionControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setDescriptionMessage(descriptionControl));
    subjectsControl.valueChanges.subscribe(value =>
      this.setSubjectsMessage(subjectsControl));
    languagesControl.valueChanges.subscribe(value =>
      this.setLanguagesMessage(languagesControl));
  }
  private buildLanguages(): FormGroup {
    const group = this.formBuilder.group({}, {validator : checkboxValidator});
    for (const language of this.allLanguages) {
      group.addControl(language.toLowerCase(), new FormControl(false));
    }
    return group;
  }
  private buildSubjects(): FormGroup {
    const group = this.formBuilder.group({}, {validator : checkboxValidator});
    for (const subject of this.allSubjects) {
      group.addControl(subject.toLowerCase(), new FormControl(false));
    }
    return group;
  }
  private setGivenNameMessage(givenNameControl: AbstractControl): void {
    this.givenNameMessage = '';
    if ((givenNameControl.touched || givenNameControl.dirty) && givenNameControl.errors) {
      this.givenNameMessage = Object.keys(givenNameControl.errors).map(key =>
        this.validationMessages.givenName[key]).join(' ');
    }
  }
  private setFamilyNameMessage(familyNameControl: AbstractControl): void {
    this.familyNameMessage = '';
    if ((familyNameControl.touched || familyNameControl.dirty) && familyNameControl.errors) {
      this.familyNameMessage = Object.keys(familyNameControl.errors).map(key =>
        this.validationMessages.familyName[key]).join(' ');
    }
  }
  private setEmailMessage(emailControl: AbstractControl): void {
    this.emailMessage = '';
    if ((emailControl.touched || emailControl.dirty) && emailControl.errors) {
      this.emailMessage = Object.keys(emailControl.errors).map(key =>
        this.validationMessages.email[key]).join(' ');
    }
  }
  private setLinkedinMessage(linkedinControl: AbstractControl): void {
    this.linkedinMessage = '';
    if ((linkedinControl.touched || linkedinControl.dirty) && linkedinControl.errors) {
      this.linkedinMessage = Object.keys(linkedinControl.errors).map(key =>
        this.validationMessages.linkedin[key]).join(' ');
    }
  }
  private setTimeZoneMessage(timeZoneControl: AbstractControl): void {
    this.timeZoneMessage = '';
    if (timeZoneControl.touched && timeZoneControl.errors) {
      this.timeZoneMessage = Object.keys(timeZoneControl.errors).map(key =>
        this.validationMessages.timeZone[key]).join(' ');
    }
  }
  private setDescriptionMessage(descriptionControl: AbstractControl): void {
    this.descriptionMessage = '';
    if ((descriptionControl.touched || descriptionControl.dirty) && descriptionControl.errors) {
      this.descriptionMessage = Object.keys(descriptionControl.errors).map(key =>
        this.validationMessages.description[key]).join(' ');
    }
  }
  private setSubjectsMessage(subjectsGroup: AbstractControl): void {
    this.subjectsMessage = '';
    if ((subjectsGroup.touched || subjectsGroup.dirty) && subjectsGroup.errors) {
      this.subjectsMessage = Object.keys(subjectsGroup.errors).map(key =>
        this.validationMessages.subjects[key]).join(' ');
    }
  }
  private setLanguagesMessage(languagesGroup: AbstractControl): void {
    this.languagesMessage = '';
    if ((languagesGroup.touched || languagesGroup.dirty) && languagesGroup.errors) {
      this.languagesMessage = Object.keys(languagesGroup.errors).map(key =>
        this.validationMessages.subjects[key]).join(' ');
    }
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
      time_zone: user.time_zone
      // languages: user.languages,
      // country_from: user.country_from,
      // country_present: user.country_present,
      // organizations: user.organizations
      // subjects: user.subjects
    });
  }
  save() {
    console.log(this.userForm);
    // console.log(this.userForm.get('name').errors.required);
    // console.log(this.userForm.get('email').errors.required);
    // console.log('Saved: ' + JSON.stringify(this.userForm.value));
  }
}


