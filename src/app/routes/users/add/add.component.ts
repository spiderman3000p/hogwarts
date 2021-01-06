import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { User } from 'src/app/models/user.model';
import {formatDate} from 'src/app/utils'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  idNumber!: number;
  user!: User | undefined;
  userForm!: FormGroup;
  mode: string = 'add';

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router,
    private snack: MatSnackBar, private activatedRoute: ActivatedRoute) {}

  onSubmit() {
    if (!this.userForm.valid) {
      this.snack.open('Please fill all required fields', 'OK')
      return
    }
    const user = this.userForm.value
    user.birthdate = formatDate(user.birthdate)
    if (this.mode == 'add') {
      this.userService.saveUser(user)
      this.snack.open('User added successfully', 'OK')
    } else {
      this.userService.editUser(user)
      this.snack.open('User edited successfully', 'OK')
    }
    this.router.navigate(['user-list'])
  }

  ngOnInit() {
    this.activatedRoute.data
    .subscribe((data: { user: User, mode: string }) => {
      this.user = data.user;
      this.mode = data.mode;
      if (this.mode == 'add') {
        this.userForm  = this.fb.group({
          idNumber: [null, Validators.required],
          birthdate: [null, Validators.required],
          fullName: [null, Validators.required],
          phone: [null, Validators.required],
          address: [null, Validators.required],
        });
      } else {
        this.userForm  = this.fb.group({
          idNumber: [this.user.idNumber, Validators.required],
          birthdate: [formatDate(this.user.birthdate), Validators.required],
          fullName: [this.user.fullName, Validators.required],
          phone: [this.user.phone, Validators.required],
          address: [this.user.address, Validators.required],
        });
      }
    });
  }

  getTitle() {
    let title = this.mode
    title = title.replace(title.charAt(0), title.charAt(0).toUpperCase())
    return title
  }
}
