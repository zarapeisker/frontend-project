import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {SubjectService} from '../../../services/subject.service';

@Component({
  moduleId: module.id,
  selector: 'app-search-tile',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss']
})

export class SearchComponent implements OnInit {
  @Input() searchButtonText: string;
  @Input() buttonDisabled: boolean;
  subject: string;
  subjects: Observable<any>;
  subjectNames: Array<string>;
  constructor(private _subjectService: SubjectService) { }

  ngOnInit() {
    this.subjects = this._subjectService.allSubjects();
    this.createSubjectNamesArray();
  }

  search = (text: Observable<any>) =>
    text
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.subjectNames
          .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  searchBySubject() {
    this.findSubjectId();
  }

  private findSubjectId() {
    this.subjects
      .map(arrayOfObjects => arrayOfObjects
        .find(object => object.name === this.subject))
      .subscribe(subjectObject => {
        this.findTeachersBySubjectId(subjectObject.id);
      });
  }
  private findTeachersBySubjectId(subjectId) {
    this._subjectService.teachersBySubjectId(subjectId)
      .subscribe(val => {
        console.log(val);
      });
  }
  private createSubjectNamesArray() {
    this.subjects
      .map(array => array
        .map(item => item.name))
      .subscribe(val => {
        this.subjectNames = val;
      });
  }
}
