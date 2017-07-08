import {NgModule} from '@angular/core';
import {StudentAboutComponent} from './student-about/student-about.component';
import {RouterModule} from '@angular/router';
import {TileHelperModule} from '../shared/tile_helper.module';
import {TutorListComponent} from './tutor-list/tutor-list.component';
import {StudentHomeComponent} from './student-home.component/student-home.component';

@NgModule({
  declarations: [
    StudentAboutComponent,
    TutorListComponent,
    StudentHomeComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'students', component: StudentAboutComponent},
      {path: 'tutor-list', component: TutorListComponent}
    ]),
    TileHelperModule
  ]
})

export class StudentModule { }
