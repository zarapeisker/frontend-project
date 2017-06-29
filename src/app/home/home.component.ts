import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent {
  titleQuote = 'EdRefuge connects refugees and tutors. Save the world, one lesson at a time.';
  searchButtonText1 = 'Find a Tutor';
  searchButtonText2 = 'Find a Student';
  aboutQuote1 = 'EdRefuge connects refugees and tutors.';
  aboutQuote2 = 'Our tutors change lives.';
  aboutQuote3 = 'Our students change the world.';
  testimonialQuote1 = 'EdRefuge rocks!';
  testimonialQuote2 = 'I love EdRefuge!';
  testimonialQuote3 = 'What they said!';
}
