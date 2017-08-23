import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  constructor(private _authService: AuthService) {
    _authService.handleAuthentication();
  }
  login() {
    this._authService.login();
  }
  isAuthenticated() {
    return this._authService.isAuthenticated();
  }
  logout() {
    this._authService.logout();
  }
}
