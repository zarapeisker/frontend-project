import {Component} from '@angular/core';

@Component ({
  moduleId: module.id,
  templateUrl: 'tutor-list.component.html',
  styleUrls: ['tutor-list.component.scss']
})

export class TutorListComponent {
  tutors: Array<object> = [
    {name: 'Sally'},
    {name: 'Fred'},
    {name: 'Durst'}
  ];
}
