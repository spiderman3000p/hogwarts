import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexLayoutComponent } from './index-layout/index-layout.component';
import { AddComponent } from './routes/users/add/add.component';
import { ListComponent } from './routes/users/list/list.component';
import { UserResolverService } from './services/user-resolver.service';

const routes: Routes = [
  {
    path: 'add-user',
    component: AddComponent,
    data: {
      mode: 'add'
    }
  },
  {
    path: 'edit-user/:id',
    component: AddComponent,
    resolve: {
      user: UserResolverService
    },
    data: {
      mode: 'edit'
    }
  },
  {
    path: 'user-list',
    component: ListComponent
  },
  {
    path: '',
    redirectTo: 'add-user',
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
