import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component/welcome.component';
import {PageNotFoundComponent} from './pagenotfound.component/pagenotfound.component';
import {CallbackComponent} from './callback.component/callback.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: 'callback', component: CallbackComponent},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
