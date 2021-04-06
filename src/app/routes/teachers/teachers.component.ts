import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/models/teacher.model';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  year = new Date().getFullYear()
  teachers$: Observable<Teacher[]> = new Observable()
  constructor(private teachersService: TeachersService) {

  }

  ngOnInit(): void {
    this.loadTeachers()
  }

  loadTeachers(){
    this.teachers$ = this.teachersService.getTeachers()
  }
}
