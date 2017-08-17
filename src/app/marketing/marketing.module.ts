import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './home.component/home.component';
import {StudentsComponent} from './students.component/students.component';
import {TutorsComponent} from './tutors.component/tutors.component';
import {FeatureComponent} from './marketing.shared/feature.component/feature.component';
import {SearchComponent} from './marketing.shared/search.component/search.component';
import {TitleComponent} from './marketing.shared/title.component/title.component';
import { HttpModule } from '@angular/http';
import {SubjectService} from '../subject.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'students', component: StudentsComponent},
      {path: 'tutors', component: TutorsComponent}
    ]),
    // used in search.component
    FormsModule,
    CommonModule,
    NgbModule,
    HttpModule
  ],
  declarations: [
    HomeComponent,
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

export class MarketingModule { }
