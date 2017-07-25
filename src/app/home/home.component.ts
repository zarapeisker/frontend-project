import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent {
  titleQuote = 'EdRefuge connects refugees and tutors. Save the world, one lesson at a time.';
  titleImage = '../../../assets/images/superhero_kids.png';
  titleTextColor = 'color-white';
  overlayColor = 'bg-blue';
  searchButtonText1 = 'Find a Tutor';
  searchButtonText2 = 'Find a Student';
  button1 = 'active';
  button2 = 'disabled';
  buttonDisabled = true;
  // public pageBackgroundArray: Array<string> = [];
  // public x = 0;
  // getRandomBackground = () => {
  //   this.x++;
  //   console.log('function:' + this.x);
  //   const pageBackgroundArray = this.pageBackgroundArray;
  //   let bad_background = false;
  //   let background;
  //   const backgrounds = [
  //     '../../../assets/images/pink_bolt_burst_bg.png',
  //     '../../../assets/images/green_dot_bg.png',
  //     '../../../assets/images/green_star_burst_bg.png',
  //     '../../../assets/images/orange_bolt_bg.png',
  //     '../../../assets/images/orange_dot_bg.png',
  //     '../../../assets/images/pink_bolt_burst_bg.png',
  //     '../../../assets/images/pink_dot_bg.png',
  //     '../../../assets/images/purple_bolt_bg.png',
  //     '../../../assets/images/purple_star_burst_bg.png',
  //     '../../../assets/images/red_dot_bg.png',
  //     '../../../assets/images/red_star_bg.png',
  //     '../../../assets/images/yellow_star_bg.png'
  //   ];
  //   function setBackground() {
  //     background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  //     console.log('setBackground:' + background);
  //     checkIfPageArrayIsZero();
  //   }
  //   function checkIfPageArrayIsZero() {
  //     console.log('checkIfPageArrayIsZero');
  //     console.log(background);
  //     if (pageBackgroundArray.length === 0) {
  //       console.log('is zero');
  //       pushAndReturnBackground();
  //     } else {
  //       console.log('not zero');
  //       console.log(pageBackgroundArray);
  //       // checkIfBackgroundEqualsArrayItem();
  //       // checkForBadPage();
  //     }
  //   }
  //   function pushAndReturnBackground() {
  //     console.log('pushAndReturnBackground');
  //     pageBackgroundArray.push(background);
  //     return background;
  //   }
  //   function checkIfBackgroundEqualsArrayItem() {
  //     let i;
  //     for (i = 0; i < pageBackgroundArray.length; i++) {
  //       if (background === pageBackgroundArray[i]) {
  //         bad_background = true;
  //       }
  //     }
  //   }
  //   function checkForBadPage() {
  //     if (bad_background === false) {
  //       pageBackgroundArray.push(background);
  //       return background;
  //     } else {
  //       setBackground();
  //     }
  //   }
  //   setBackground();
  // }
}
