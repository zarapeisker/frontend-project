import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WelcomeComponent} from './welcome.component/welcome.component';
import {StudentsComponent} from './welcome.students.component/welcome.students.component';
import {TutorsComponent} from './welcome.tutors.component/welcome.tutors.component';
import {FeatureComponent} from './welcome.shared/feature.component/feature.component';
import {SearchComponent} from './welcome.shared/search.component/search.component';
import {TitleComponent} from './welcome.shared/title.component/title.component';
import {SubjectService} from '../services/subject.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'welcome/students', component: StudentsComponent},
      {path: 'welcome/tutors', component: TutorsComponent}
    ]),
    // used in search.component
    FormsModule,
    CommonModule,
    NgbModule
  ],
  declarations: [
    WelcomeComponent,
    StudentsComponent,
    TutorsComponent,
    FeatureComponent,
    SearchComponent,
    TitleComponent
  ],
  providers: [
    SubjectService
  ]
})

export class WelcomeModule { }
