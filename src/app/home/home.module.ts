import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {TileHelperModule} from '../shared/tile_helper.module';

@NgModule({
  imports: [TileHelperModule],
  declarations: [HomeComponent]
})

export class HomeModule { }
