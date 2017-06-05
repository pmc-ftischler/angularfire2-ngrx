import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from './models/todo';
import { TodosService } from './services/todos.service';
import { MdDialog, MdDialogConfig, MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngrxfire-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  public todos: Observable<Todo[]> = this.todosService.getTodos();

  /**
   * Constructor of TodosComponent
   * @param todosService
   * @param mdDialog
   * @param mdSnackBar
   * @param translateService
   */
  constructor(private todosService: TodosService, private mdDialog: MdDialog, private mdSnackBar: MdSnackBar,
              private translateService: TranslateService) {
  }

  /**
   * Opens a dialog for new TodoElement
   */
  openNewTodoDialog() {
    const dialogConfig: MdDialogConfig = new MdDialogConfig();
    dialogConfig.width = '400px';

    const dialogRef = this.mdDialog.open(AddTodoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(todo => {
      if (todo) {
        const snackBarConfig = new MdSnackBarConfig();
        snackBarConfig.duration = 2000;
        this.mdSnackBar.open(this.translateService.instant('todos.snackBar.addTodoSuccess'), null, snackBarConfig);
        this.todosService.addTodo(todo);
      }
    });
  }

  /**
   * Removes a TodoElement from the list
   * @param todoElement
   */
  removeTodo(todoElement: Todo) {
    this.todosService.removeTodo(todoElement);
  }
}
