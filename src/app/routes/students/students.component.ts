import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from 'src/app/components/dialogs/add-student-dialog/add-student-dialog.component';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = []
  year = new Date().getFullYear()
  constructor(private studentsService: StudentsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadStudents()
  }

  loadStudents(){
    this.studentsService.getStudents().subscribe(students => {
      console.log('estudiantes remotos', students)
      const localStudents = JSON.parse(localStorage.getItem('hogwartsStudents') || '[]')
      console.log('estudiantes en local', localStudents)
      if (Array.isArray(localStudents) && localStudents.length > 0){
        students = students.concat(localStudents as Array<Student>)
      }
      this.students = students
    })
  }

  showAddDialog(){
    let dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result){
        this.students.push(result)
      }
    });
  }
}
