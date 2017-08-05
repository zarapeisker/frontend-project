import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TileHelperModule} from '../../shared/tile_helper.module';
import {TutorListComponent} from './tutor-list/tutor-list.component';
import {StudentHomeComponent} from './student-home.component/student-home.component';

@NgModule({
  declarations: [
    TutorListComponent,
    StudentHomeComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'tutor-list', component: TutorListComponent},
      {path: 'student-home', component: StudentHomeComponent}
    ]),
    TileHelperModule
  ]
})

export class StudentModule { }
