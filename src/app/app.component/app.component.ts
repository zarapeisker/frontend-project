import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.authService.handleAuthentication();
  }
  login() {
    this.authService.login();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  logout() {
    this.authService.logout();
  }
}
