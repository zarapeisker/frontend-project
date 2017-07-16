import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent {
  titleQuote = 'EdRefuge connects refugees and tutors. Save the world, one lesson at a time.';
  titleImage = '../../../assets/images/superhero_kids.png';
  titleTextColor = 'color-yellow';
  overlayColor = 'bg-purple';
  searchButtonText1 = 'Find a Tutor';
  searchButtonText2 = 'Find a Student';
}
