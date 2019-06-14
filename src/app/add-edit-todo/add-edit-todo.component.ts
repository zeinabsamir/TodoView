import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo-service';

@Component({
  selector: 'app-add-edit-todo',
  templateUrl: './add-edit-todo.component.html',
  styleUrls: ['./add-edit-todo.component.css']
})
export class AddEditTodoComponent implements OnInit {
  @ViewChild('todoForm') todo: NgForm;
   editMode = false;
   todoId;
   task = '';
  constructor(private _todoService: TodoService,
               private _route: Router,
               private _activatedRoute: ActivatedRoute  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(a => {
      if(a['id']) {
        this.editMode = true;
        this.todoId = a['id'];
        this._todoService.getTodo(this.todoId).subscribe(result => {
          this.todo.controls['task'].setValue(result[0].task);
        })
      }

    })
  }


  onSubmitTodo(form: NgForm) {
    if (form.invalid) {
    return;
  }
   if(this.editMode) {
     this.editMode = false;
     this._todoService.updateTodo(form.value,this.todoId).subscribe( result => {
       console.log(result);
       this._route.navigate(['/todos']);
     })
   } else {

     this._todoService.createTodo(form.value).subscribe( result => {
       console.log(result);
       this._route.navigate(['/todos']);
     })

   }
  }

}
