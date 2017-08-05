import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-title-tile',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.scss']
})

export class TitleComponent {
  @Input() titleQuote: string;
  @Input() titleImage: string;
  @Input() titleAuthor: string;
  @Input() titleTextColor: string;
  @Input() overlayColor: string;
}
