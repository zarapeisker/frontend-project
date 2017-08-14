import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

const subjects = ['Math', 'English', 'Science', 'Social Studies'];

@Component({
  moduleId: module.id,
  selector: 'app-search-tile',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss']
})

export class SearchComponent {
  @Input() searchButtonText: string;
  @Input() buttonDisabled: boolean;
  subject: string;

  search = (text: Observable<string>) =>
    text
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : subjects.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  searchSubject(): void {
    switch (this.subject) {
        case 'Math': console.log('Math');
          break;
        case 'English': console.log('English');
          break;
        case 'Social Studies': console.log('Social Studies');
          break;
        case 'Science': console.log('Science');
          break;
        default:  console.log('Other');
      }
  }
}
