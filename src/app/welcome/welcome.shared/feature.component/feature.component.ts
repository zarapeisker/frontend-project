import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-feature',
  templateUrl: 'feature.component.html',
  styleUrls: ['feature.component.scss']
})

export class FeatureComponent {
  @Input() imageLocation: string;
  @Input() imageUrl: string;
  @Input() numberUrl: string;
  @Input() bubble: boolean;
  @Input() feature: boolean;
  @Input() textLocation: string;
  @Input() textType: string;
  @Input() text: string;
}
