import {Component} from '@angular/core';

@Component ({
  moduleId: module.id,
  templateUrl: 'session.component.html',
  styleUrls: ['session.component.scss']
})

export class SessionDetailComponent {
  session: any = {
    language: 'French',
    teacher: 'Jeremy Kraynak',
    subject: 'Science',
    appointment: 'September 5, 2017 at 3PM',
    description: 'I need help with my science homework.'
  };
}
