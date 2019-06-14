import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
   private _todosUrl = 'http://localhost:8080/todos/';

  constructor(private http: HttpClient) {}

  getAllTodos() {
    return  this.http.get<any>(this._todosUrl)
  }

  createTodo(todo) {
   return this.http.post<any>(this._todosUrl + `add`, todo);

  }

  updateTodo(todo, id) {
  return  this.http.post<any>(this._todosUrl+`edit/${id}`, todo)

  }

  deleteTodo(id) {
    return  this.http.get<any>(this._todosUrl+`delete/${id}`)
    }

  getTodo(id) {
    return  this.http.get<any>(this._todosUrl+`${id}`)
   }
}
