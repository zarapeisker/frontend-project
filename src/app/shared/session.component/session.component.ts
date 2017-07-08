import {Component} from '@angular/core';

@Component ({
  moduleId: module.id,
  templateUrl: 'session.component.html',
  styleUrls: ['session.component.scss']
})

export class SessionComponent {
  session: object = {
    language: 'Arabic',
    teacher: 'Linda Leopard',
    student: 'Joey Jaguar',
    subject: 'Math',
    appointment: 'September 5, 2017 at 3PM',
    description: 'I need help with Pythagorean Theorem.'
  };
}
