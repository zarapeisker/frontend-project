import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SubjectService {
  // eventually, the urls should be moved into a url service
  private subjectsUrl = 'https://blooming-plains-85208.herokuapp.com/subjects';
  constructor(private http: Http) { }
  allSubjects(): Observable<any> {
    return this.http.get(this.subjectsUrl)
      .map((resp: Response) => resp.json());
  }
  teachersBySubjectId(subject_id): Observable<any> {
    return this.http.get('https://blooming-plains-85208.herokuapp.com/subjects/' + subject_id.toString() + '/teachers')
      .map((resp: Response) => resp.json());
  }
}

