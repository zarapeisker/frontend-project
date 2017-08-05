import {NgModule} from '@angular/core';
import {TileHelperModule} from '../../shared/tile_helper.module';
import {TutorHomeComponent} from './tutor-home.component/tutor-home.component';

@NgModule({
  declarations: [
    TutorHomeComponent
  ],
  imports: [
    TileHelperModule
  ]
})

export class TutorModule { }
