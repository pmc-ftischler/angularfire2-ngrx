import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from './models/todo';
import { TodosService } from './services/todos.service';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { AddTodoComponent } from './add-todo/add-todo.component';

@Component({
  selector: 'ngrxfire-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos: Observable<Todo[]> = this.todosService.getTodos();

  constructor(private todosService: TodosService, private mdDialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogConfig: MdDialogConfig = new MdDialogConfig();
    dialogConfig.width = '50%';

    const dialogRef = this.mdDialog.open(AddTodoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
