import {NgModule} from '@angular/core';
import {StudentAboutComponent} from './student-about.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [StudentAboutComponent],
  imports: [
    RouterModule.forChild([
      {path: 'students', component: StudentAboutComponent}])
  ]
})

export class StudentModule { }
