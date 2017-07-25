import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './tutor-about.component.html',
  styleUrls: ['./tutor-about.component.scss']
})

export class TutorAboutComponent {
  titleQuote = 'Education is, quite simply, peace-building by another name. It is the most effective form of defense spending there is.';
  titleAuthor = 'Kofi Annan';
  titleImage = '../../../assets/images/tutorHero.png';
  titleTextColor = 'color-black';
  overlayColor = 'bg-yellow';
  searchButtonText = 'Find a Student';
  buttonState = 'disabled';
  buttonDisabled = true;
}
