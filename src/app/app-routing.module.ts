import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'students',
    loadChildren: () => import('./routes/students/students.module').then(m => m.StudentsModule)
  },
  { path: 'characters', loadChildren: () => import('./routes/characters/characters.module').then(m => m.CharactersModule) },
  { path: 'teachers', loadChildren: () => import('./routes/teachers/teachers.module').then(m => m.TeachersModule) },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
