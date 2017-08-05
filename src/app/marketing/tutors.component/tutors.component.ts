import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'tutors.component.html',
  styleUrls: ['tutors.component.scss']
})

export class TutorsComponent {
  titleQuote = 'Education is, quite simply, peace-building by another name. It is the most effective form of defense spending there is.';
  titleAuthor = 'Kofi Annan';
  titleImage = '../../../assets/images/tutorHero.jpg';
  titleTextColor = 'color-black';
  overlayColor = 'bg-yellow';
  searchButtonText = 'Find a Student';
  buttonState = 'disabled';
  buttonDisabled = true;
  // features
  featureTextType = 'feature-text';
  // feature 1
  featureImage1 = '../../../assets/images/time.png';
  featureImageLocation1 = 'left';
  featureText1 = '30 minute lessons and no long-term commitment required.';
  featureTextLocation1 = 'bottom-right';
  // feature 2
  featureImage2 = './../../assets/images/search_for_student.png';
  featureImageLocation2 = 'right';
  featureText2 = 'Search for the students you can help the most by language, subject, and backstory.';
  featureTextLocation2 = 'top-left';
  // feature 3
  featureImage3 = '../../../assets/images/superhero.png';
  featureImageLocation3 = 'left';
  featureText3 = 'Save the world, one lesson at a time!';
  featureTextLocation3 = 'top-right';
  // bubbles
  bubbleTextType = 'bubble-text';
  // bubble 1
  bubbleImage1 = '../../../assets/images/bubbles_9.png';
  bubbleImageLocation1 = 'center';
  numberUrl1 = '../../../assets/images/numbers_1.png';
  bubbleText1 = 'Create a profile with your language(s), experience, and availability.';
  bubbleTextLocation1 = 'bubble-text-4';
  // bubble 2
  bubbleImage2 = '../../../assets/images/bubbles_5.png';
  bubbleImageLocation2 = 'center';
  numberUrl2 = '../../../assets/images/numbers_2.png';
  bubbleText2 = 'We match you up with refugees looking for a tutor just like you.';
  bubbleTextLocation2 = 'bubble-text-5';
  // bubble 3
  bubbleImage3 = '../../../assets/images/bubbles_1.png';
  bubbleImageLocation3 = 'center';
  numberUrl3 = '../../../assets/images/numbers_3.png';
  bubbleText3 = 'Schedule your first session!';
  bubbleTextLocation3 = 'bubble-text-6';
}
