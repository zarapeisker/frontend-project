import {Component} from '@angular/core';

@Component ({
  moduleId: module.id,
  selector: 'app-comic-panel',
  templateUrl: 'comic-panel.component.html',
  styleUrls: ['comic-panel.component.scss']
})

export class ComicPanelComponent {
  getRandomBackground = () => {
    const backgrounds = [
      '../../../assets/images/pink_bolt_burst_bg.png',
      '../../../assets/images/green_dot_bg.png',
      '../../../assets/images/green_star_burst_bg.png',
      '../../../assets/images/orange_bolt_bg.png',
      '../../../assets/images/orange_dot_bg.png',
      '../../../assets/images/pink_bolt_burst_bg.png',
      '../../../assets/images/pink_dot_bg.png',
      '../../../assets/images/purple_bolt_bg.png',
      '../../../assets/images/purple_star_burst_bg.png',
      '../../../assets/images/red_dot_bg.png',
      '../../../assets/images/red_star_bg.png',
      '../../../assets/images/yellow_star_bg.png'
    ];
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
  }
}


// if (this.pageBackgroundArray.length === 0) {
//   console.log('inside new if');
//   return background;
// } else {
//   let i;
//   for (i = 0; i < this.pageBackgroundArray.length; i++) {
//     console.log('inside for');
//     if (background === this.pageBackgroundArray[i]) {
//       console.log('inside if');
//       this.getRandomBackground();
//     } else {
//       console.log('inside else');
//       this.pageBackgroundArray.push(background);
//       return background;
//     }
//   }
// }
