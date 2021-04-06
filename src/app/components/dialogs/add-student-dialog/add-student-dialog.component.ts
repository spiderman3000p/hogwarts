import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs/internal/Subscription';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})
export class AddStudentDialogComponent implements OnInit {
  form: FormGroup;
  uploadProgress = null
  constructor(public dialogRef: MatDialogRef<AddStudentDialogComponent>, private fb: FormBuilder,
    private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      actor: ['', Validators.required],
      patronus: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.form.valid){
      return
    }
    const formValues = this.form.value
    console.log('form values', formValues)
    if (typeof formValues.dateOfBirth != 'object'){
      this.snackBar.open("Error con la fecha de nacimiento", "OK", {
        duration: 2000,
      });
      return
    }
    const date = formValues.dateOfBirth as Date
    formValues.dateOfBirth = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    let newStudent = new Student()
    newStudent = Object.assign(newStudent, formValues)
    newStudent.yearOfBirth = date.getFullYear()
    console.log('new student', newStudent)
    const savedItems = JSON.parse(localStorage.getItem('hogwartsStudents') || '[]')
    if (Array.isArray(savedItems)){
      savedItems.push(newStudent)
    }
    localStorage.setItem('hogwartsStudents', JSON.stringify(savedItems))
    this.snackBar.open("Estudiante agregado")
    this.dialogRef.close(newStudent)
  }
}
