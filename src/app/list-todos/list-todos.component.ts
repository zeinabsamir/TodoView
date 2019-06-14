import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from '../todo-service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor(private _todoService: TodoService,
              private router: Router,
) { }

  todos: any[] = [];
  todoSub: Subscription;
  ngOnInit() {
     this.getAllTodos();
  }

  getAllTodos() {
   // this._todoService.getAllTodos();
    this.todoSub = this._todoService.getAllTodos().subscribe(
      data  => this.todos = data
       )

  }

  onEdit(id) {
    this.router.navigate([`edit/${id}`]);
  }

  onDelete(id) {
    this._todoService.deleteTodo(id).subscribe(data =>  this.todoSub = this._todoService.getAllTodos().subscribe(
      data  => this.todos = data
      ));
  }

  ngOnDestroy() {

    this.todoSub.unsubscribe();
  }
}
