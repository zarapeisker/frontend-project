import {NgModule} from '@angular/core';
import {TutorAboutComponent} from './tutor-about.component';
import {RouterModule} from '@angular/router';
import {TileHelperModule} from '../shared/tile_helper.module';

@NgModule({
  declarations: [TutorAboutComponent],
  imports: [
    RouterModule.forChild([
      {path: 'tutors', component: TutorAboutComponent}]),
    TileHelperModule
  ]
})

export class TutorModule { }
