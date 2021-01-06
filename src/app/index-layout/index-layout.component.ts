import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import {formatDate} from 'src/app/utils'
import { User } from '../models/user.model';

@Component({
  selector: 'app-index-layout',
  templateUrl: './index-layout.component.html',
  styleUrls: ['./index-layout.component.scss']
})
export class IndexLayoutComponent {
  usersCount: number = 0;
  birthdayUsersCount: number = 0;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private userService: UsersService) {
    this.usersCount = this.userService.users.length
    this.userService.users$.subscribe(users => {
      this.usersCount = users.length
      this.getBirthdays(users)
    })
    this.getBirthdays(this.userService.users)
  }

  getBirthdays(users: User[]) {
    this.birthdayUsersCount = users.filter(_user => {
      console.log(`comparing ${_user.birthdate} with ${formatDate(new Date())}`)
      return _user.birthdate == formatDate(new Date())
    }).length
  }

}
