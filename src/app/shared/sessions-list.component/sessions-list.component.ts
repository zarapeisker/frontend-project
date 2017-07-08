import {Component} from '@angular/core';

@Component ({
  moduleId: module.id,
  selector: 'app-sessions-list',
  templateUrl: 'sessions-list.component.html',
  styleUrls: ['sessions-list.component.scss']
})

export class SessionsListComponent {
  sessions: Array<object> = [
    { language: 'English',
      teacher: 'Julie Leopard',
      student: 'Sunny Cat',
      subject: 'Math',
      appointment: 'September 5 at 2:00PM',
      description: 'I need to practice isosceles triangles.',
      notes: 'Sunny is a joy to work with. Still needs some help with Pythagorean theorem.'
    },
    { language: 'English',
      teacher: 'Julie Leopard',
      student: 'Sunny Cat',
      subject: 'Math',
      appointment: 'September 5 at 2:00PM',
      description: 'I need to practice isosceles triangles.',
      notes: 'Sunny is a joy to work with. Still needs some help with Pythagorean theorem.'
    },
    { language: 'English',
      teacher: 'Julie Leopard',
      student: 'Sunny Cat',
      subject: 'Math',
      appointment: 'September 5 at 2:00PM',
      description: 'I need to practice isosceles triangles.',
      notes: 'Sunny is a joy to work with. Still needs some help with Pythagorean theorem.'
    },
    { language: 'English',
      teacher: 'Julie Leopard',
      student: 'Sunny Cat',
      subject: 'Math',
      appointment: 'September 5 at 2:00PM',
      description: 'I need to practice isosceles triangles.',
      notes: 'Sunny is a joy to work with. Still needs some help with Pythagorean theorem.'
    }
  ];
}
