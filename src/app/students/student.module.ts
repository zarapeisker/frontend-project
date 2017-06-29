import {NgModule} from '@angular/core';
import {StudentAboutComponent} from './student-about.component';
import {RouterModule} from '@angular/router';
import {TileHelperModule} from '../shared/tile_helper.module';

@NgModule({
  declarations: [StudentAboutComponent],
  imports: [
    RouterModule.forChild([
      {path: 'students', component: StudentAboutComponent}]),
    TileHelperModule
  ]
})

export class StudentModule { }
