import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'student-about.component.html',
  styleUrls: ['student-about.component.scss']
})

export class StudentAboutComponent {
  titleQuote = 'If we are to have peace on earth . . . Our loyalties must transcend our race, our tribe, our class, and our nation; ' +
    'and this means we must develop a world perspective.';
  titleAuthor = 'Martin Luther King';
  searchButtonText = 'Find a Tutor';
  aboutQuote1 = 'EdRefuge does this amazing thing for students.';
  aboutQuote2 = 'EdRefuge does this other amazing thing for students.';
  aboutQuote3 = 'EdRefuge does a third amazing thing for students.';
  step1 = 'Step 1: Search for a subject.';
  step2 = 'Step 2: Create a profile.component.';
  step3 = 'Step 3: Start learning!';
  testimonialQuote1 = 'The tutors rock!';
  testimonialQuote2 = 'I love EdRefuge tutors!';
  testimonialQuote3 = 'What they said!';
}
