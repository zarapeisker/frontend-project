import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {TileHelperModule} from '../shared/tile_helper.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    TileHelperModule,
    NgbModule
  ],
  declarations: [HomeComponent]
})

export class HomeModule { }
