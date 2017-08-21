import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {VideochatComponent} from './videochat.component/videochat.component';
import {ComicPanelComponent} from './comic-panel.component/comic-panel.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'videochat', component: VideochatComponent}
    ]),
  ],
  declarations: [
    VideochatComponent,
    ComicPanelComponent
  ],
  exports: [
    VideochatComponent,
    ComicPanelComponent
  ]
})

export class TileHelperModule { }

