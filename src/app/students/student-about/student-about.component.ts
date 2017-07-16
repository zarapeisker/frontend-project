import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'student-about.component.html',
  styleUrls: ['student-about.component.scss']
})

export class StudentAboutComponent {
  titleQuote = 'Education is the most powerful weapon which you can use to change the world.';
  titleAuthor = 'Nelson Mandela';
  titleImage = '../../../assets/images/superkid.png';
  titleTextColor = 'color-white';
  overlayColor = 'bg-blue';
  searchButtonText = 'Find a Tutor';
}
