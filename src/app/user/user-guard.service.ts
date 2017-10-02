/**
 * Created by zarapeisker on 10/2/17.
 */
import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {UserEditComponent} from './user-edit.component/user-edit.component';

@Injectable()
export class UserEditGuard
  implements CanDeactivate<UserEditComponent> {
    canDeactivate(component: UserEditComponent): boolean {
      if (component.userForm.dirty) {
        return confirm('If you navigate away from this form, you will lose all your changes. Do you wish to proceed?');
      }
      return true;
    }
}
