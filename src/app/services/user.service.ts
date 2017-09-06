import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  // eventually, the urls should be moved into a url service
  private usersUrl = 'http://localhost:3000/teachers';
  constructor(private http: Http) { }
  allUsers(): Observable<any> {
    return this.http.get(this.usersUrl)
      .map((resp: Response) => resp.json());
  }
  createUser(convertedAuthProfile) {
    return this.http.post(this.usersUrl, convertedAuthProfile)
      .map((resp: Response) => resp.json());
  }
  getUser(id) {
    return this.http.get(this.usersUrl + '/' + id)
      .map((resp: Response) => resp.json());
  }
}

