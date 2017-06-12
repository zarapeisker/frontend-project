import {NgModule} from '@angular/core';
import {
  MdMenuModule, MdButtonModule, MdIconModule, MdToolbarModule, MdGridListModule,
  MdInputModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  exports: [
    MdMenuModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdGridListModule,
    MdInputModule,
    FlexLayoutModule
  ]
})

export class MaterialHelperModule { }
