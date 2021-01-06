import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  table!: MatTable<User>;
  dataSource!: MatTableDataSource<User>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['fullName', 'phone', 'birthdate', 'options'];
  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    const users = this.userService.users
    console.log('users loaded', users)
    this.dataSource = new MatTableDataSource<User>(users);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteUser(user: User) {
    const resp = confirm('Are you sure about delete this user?')
    console.log('response', resp)
    if (resp) {
      this.userService.deleteUser(user)
      this.dataSource.filter = 's'
      this.dataSource.filter = ''
      
    }
  }
}
