import {NgModule} from '@angular/core';
import {MaterialHelperModule} from './material-helper.module';
import {FeatureTileComponent} from './feature-tile.component/feature-tile.component';
import {GetStartedTileComponent} from './get-started.component/get-started-tile.component';
import {ReviewsTileComponent} from './reviews-tile.component/reviews-tile.component';
import {SearchTileComponent} from './search-tile.component/search-tile.component';
import {TitleTileComponent} from './title-tile.component/title-tile.component';


@NgModule({
  imports: [
    MaterialHelperModule
  ],
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

