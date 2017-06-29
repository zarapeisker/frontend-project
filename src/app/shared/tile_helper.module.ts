import {NgModule} from '@angular/core';
import {FeatureTileComponent} from './feature-tile.component/feature-tile.component';
import {GetStartedTileComponent} from './get-started.component/get-started-tile.component';
import {ReviewsTileComponent} from './testimonial-tile.component/testimonial-tile.component';
import {SearchTileComponent} from './search-tile.component/search-tile.component';
import {TitleTileComponent} from './title-tile.component/title-tile.component';


@NgModule({
  declarations: [
    FeatureTileComponent,
    GetStartedTileComponent,
    ReviewsTileComponent,
    SearchTileComponent,
    TitleTileComponent
  ],
  exports: [
    FeatureTileComponent,
    GetStartedTileComponent,
    ReviewsTileComponent,
    SearchTileComponent,
    TitleTileComponent
  ]
})

export class TileHelperModule { }

