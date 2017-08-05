import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.scss']
})

export class StudentsComponent {
  titleQuote = 'Education is the most powerful weapon which you can use to change the world.';
  titleAuthor = 'Nelson Mandela';
  titleImage = '../../../assets/images/superkid.jpg';
  titleTextColor = 'color-white';
  overlayColor = 'bg-red';
  searchButtonText = 'Find a Tutor';
  // features
  featureTextType = 'feature-text';
  // feature 1
  featureImage1 = '../../../assets/images/student_free.png';
  featureImageLocation1 = 'right';
  featureText1 = 'Every session is absolutely free!';
  featureTextLocation1 = 'top-left';
  // feature 2
  featureImage2 = '../../../assets/images/student_searching.png';
  featureImageLocation2 = 'left';
  featureText2 = 'Find the perfect tutor by language, subject, and experience.';
  featureTextLocation2 = 'top-right';
  // feature 3
  featureImage3 = '../../../assets/images/student_lesson.png';
  featureImageLocation3 = 'right';
  featureText3 = 'Get one-on-one help when you need it.';
  featureTextLocation3 = 'bottom-left';
  // bubbles
  bubbleTextType = 'bubble-text';
  // bubble 1
  bubbleImage1 = '../../../assets/images/bubbles_4.png';
  bubbleImageLocation1 = 'center';
  numberUrl1 = '../../../assets/images/numbers_1.png';
  bubbleText1 = 'Create a profile.';
  bubbleTextLocation1 = 'bubble-text-1';
  // bubble 2
  bubbleImage2 = '../../../assets/images/bubbles_2.png';
  bubbleImageLocation2 = 'center';
  numberUrl2 = '../../../assets/images/numbers_2.png';
  bubbleText2 = 'We use your preferred subject, language(s), and experience to find you the perfect tutor.';
  bubbleTextLocation2 = 'bubble-text-2';
  // bubble 3
  bubbleImage3 = '../../../assets/images/bubbles_3.png';
  bubbleImageLocation3 = 'center';
  numberUrl3 = '../../../assets/images/numbers_3.png';
  bubbleText3 = 'Start your first session!';
  bubbleTextLocation3 = 'bubble-text-3';
}
