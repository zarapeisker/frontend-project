import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-get-started-tile',
  templateUrl: 'get-started-tile.component.html',
  styleUrls: ['get-started-tile.component.scss']
})

export class GetStartedTileComponent {
  @Input() step1: string;
  @Input() step2: string;
  @Input() step3: string;
}
