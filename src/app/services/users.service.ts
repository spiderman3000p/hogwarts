import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = []
  users$: Subject<User[]> = new Subject()
  constructor() {
    if (localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users') as string)
    }
    this.users$.next(this.users)
  }

  saveUser(user:any) {
    this.users.push(user)
    this.users$.next(this.users)
    localStorage.setItem('users', JSON.stringify(this.users))
  }

  editUser(user: User) {
    let foundIndex = this.users.findIndex(_user => _user.idNumber == user.idNumber)
    if (foundIndex > -1) {
      this.users[foundIndex] = user;
      this.users$.next(this.users)
      localStorage.setItem('users', JSON.stringify(this.users))
    }
  }

  deleteUser(user: User) {
    const index = this.users.findIndex(_user => _user.idNumber == user.idNumber)
    if (index > -1) {
      this.users.splice(index, 1)
      this.users$.next(this.users)
      localStorage.setItem('users', JSON.stringify(this.users))
    }
  }

  getUser(id: number): User {
    return  this.users.find(_user => _user.idNumber == id) as User
  }
}
