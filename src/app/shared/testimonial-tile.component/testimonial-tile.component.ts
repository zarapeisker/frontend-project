import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-testimonial-tile',
  templateUrl: 'testimonial-tile.component.html',
  styleUrls: ['testimonial-tile.component.scss']
})

export class TestimonialTileComponent {
  @Input() testimonialQuote1: string;
  @Input() testimonialQuote2: string;
  @Input() testimonialQuote3: string;
}
