// This service retrieves all standard user data as outlined here:
// https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
// All remaining user data is retrives from the app database in services/user.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class AuthService {
  userProfile: any;
  auth0 = new auth0.WebAuth({
    clientID: 'xEdKl7cATKQXJc6xyqKyAfe7ulzsldpB',
    domain: 'edrefuge.auth0.com',
    responseType: 'token id_token',
    audience: 'https://edrefuge.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
      } else if (err) {
        this.router.navigate(['/welcome']);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    return;
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/welcome']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  public getProfile(cb): void {
    const accessToken = this.getAccessToken();
    console.log(accessToken);
    accessToken
      .subscribe(
        token => {
          if (!token) {
            throw new Error('Access token must exist to fetch profile');
          }
          this.auth0.client.userInfo(token, (err, profile) => {
            if (profile) {
              this.userProfile = profile;
            }
            cb(err, profile);
          });
        },
        e => console.log(e),
        () => {
          console.log('complete');
        }
    );
  }
  private getAccessToken(): Observable<string> {
    return Rx.Observable.of(localStorage.getItem('access_token'));
  }
}
