import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-title-tile',
  templateUrl: 'title-tile.component.html'
})

export class TitleTileComponent {
  @Input() title: string;
  @Input() subtitle: string;
}
