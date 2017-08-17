import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {SubjectService} from '../../../subject.service';

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
  subjects: Array<string>;
  constructor(private _subjectService: SubjectService) { }

  ngOnInit(): Array<string> {
    this._subjectService.allSubjectNames()
      .subscribe(val => {
        this.subjects = val;
      });
    return;
  }

  search = (text: Observable<any>) =>
    text
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.subjects
          .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  searchSubject(): void {
    console.log(this.subjects);
    // console.log(this._teacherService.searchTeacherBySubject());
    // switch (this.subject) {
    //     case 'Math': console.log('Math');
    //       break;
    //     case 'English': console.log('English');
    //       break;
    //     case 'Social Studies': console.log('Social Studies');
    //       break;
    //     case 'Science': console.log('Science');
    //       break;
    //     default:  console.log('Other');
    //   }
  }
}
