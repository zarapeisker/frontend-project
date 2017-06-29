import {NgModule} from '@angular/core';
import {FeatureTileComponent} from './feature-tile.component/feature-tile.component';
import {GetStartedTileComponent} from './get-started.component/get-started-tile.component';
import {TestimonialTileComponent} from './testimonial-tile.component/testimonial-tile.component';
import {SearchTileComponent} from './search-tile.component/search-tile.component';
import {TitleTileComponent} from './title-tile.component/title-tile.component';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FeatureTileComponent,
    GetStartedTileComponent,
    TestimonialTileComponent,
    SearchTileComponent,
    TitleTileComponent
  ],
  exports: [
    FeatureTileComponent,
    GetStartedTileComponent,
    TestimonialTileComponent,
    SearchTileComponent,
    TitleTileComponent
  ]
})

export class TileHelperModule { }

