import {NgModule} from '@angular/core';
import {TutorAboutComponent} from './tutor-about.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [TutorAboutComponent],
  imports: [
    RouterModule.forChild([
      {path: 'tutors', component: TutorAboutComponent}])
  ]
})

export class TutorModule { }
