import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';

const routes: Routes = [
  { path: 'todos', component: ListTodosComponent},
  { path: 'create', component: AddEditTodoComponent },
  { path: 'edit/:id', component: AddEditTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
