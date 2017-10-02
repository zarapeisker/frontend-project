import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WelcomeRoutingModule} from './welcome-routing.module';
import {WelcomeComponent} from './welcome.component/welcome.component';
import {WelcomeStudentsComponent} from './welcome.students.component/welcome.students.component';
import {WelcomeTutorsComponent} from './welcome.tutors.component/welcome.tutors.component';
import {FeatureComponent} from './welcome.shared/feature.component/feature.component';
import {SearchComponent} from './welcome.shared/search.component/search.component';
import {TitleComponent} from './welcome.shared/title.component/title.component';
import {SubjectService} from '../services/subject.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    // top 3 used in search.component
    SharedModule,
    NgbModule,
    WelcomeRoutingModule
  ],
  declarations: [
    WelcomeComponent,
    WelcomeStudentsComponent,
    WelcomeTutorsComponent,
    FeatureComponent,
    SearchComponent,
    TitleComponent
  ],
  providers: [
    SubjectService
  ]
})

export class WelcomeModule { }
