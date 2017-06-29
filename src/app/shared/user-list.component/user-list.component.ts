import {Component, Input} from '@angular/core';

@Component ({
  moduleId: module.id,
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss']
})

export class UserListComponent {
  @Input() users: Array<string>;
}
