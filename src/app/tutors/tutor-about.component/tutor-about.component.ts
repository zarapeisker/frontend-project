import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './tutor-about.component.html',
  styleUrls: ['./tutor-about.component.scss']
})

export class TutorAboutComponent {
  titleQuote = 'Education is, quite simply, peace-building by another name. It is the most effective form of defense spending there is.';
  titleAuthor = 'Kofi Annan';
  searchButtonText = 'Find a Student';
  aboutQuote1 = 'EdRefuge does this amazing thing for tutors.';
  aboutQuote2 = 'EdRefuge does this other amazing thing for tutors.';
  aboutQuote3 = 'EdRefuge does a third amazing thing for tutors.';
  step1 = 'Step 1: Search for students looking for your expertise.';
  step2 = 'Step 2: Create a tutor profile.component.';
  step3 = 'Step 3: Start helping students!';
  testimonialQuote1 = 'The students rock!';
  testimonialQuote2 = 'I love EdRefuge students!';
  testimonialQuote3 = 'What they said!';
}
