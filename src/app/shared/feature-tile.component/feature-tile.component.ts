import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-feature-tile',
  templateUrl: 'feature-tile.component.html',
  styleUrls: ['feature-tile.component.scss']
})

export class FeatureTileComponent {
  @Input() aboutQuote1: string;
  @Input() aboutQuote2: string;
  @Input() aboutQuote3: string;
}
