import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SubjectService {
  // eventually, the urls should be moved into a url service
  private subjectsUrl = 'https://blooming-plains-85208.herokuapp.com/subjects';
  constructor(private http: Http) { }
  allSubjectNames(): Observable<any> {
    return this.http.get(this.subjectsUrl)
      .map((resp: Response) => resp.json())
      .map(array => array
        .map(item => item.name));
  }
  // createSubjectsArray(subjectsJson): Array<string> {
  //   const subjectsArray = [];
  //   for (let object of subjectsJson) {
  //     console.log(item); // 9,2,5
  //   }
  //   return;
  // }
}

