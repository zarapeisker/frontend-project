import {NgModule} from '@angular/core';
import {TutorAboutComponent} from './tutor-about.component/tutor-about.component';
import {RouterModule} from '@angular/router';
import {TileHelperModule} from '../shared/tile_helper.module';
import {TutorHomeComponent} from './tutor-home.component/tutor-home.component';

@NgModule({
  declarations: [
    TutorAboutComponent,
    TutorHomeComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'tutors', component: TutorAboutComponent}]),
    TileHelperModule
  ]
})

export class TutorModule { }
