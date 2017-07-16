import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-title-tile',
  templateUrl: 'title-tile.component.html',
  styleUrls: ['title-tile.component.scss']
})

export class TitleTileComponent {
  @Input() titleQuote: string;
  @Input() titleImage: string;
  @Input() titleAuthor: string;
  @Input() titleTextColor: string;
  @Input() overlayColor: string;
}
