import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AddStudentDialogComponent } from 'src/app/components/dialogs/add-student-dialog/add-student-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [StudentsComponent, AddStudentDialogComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
   entryComponents: [ AddStudentDialogComponent ]
})
export class StudentsModule { }
