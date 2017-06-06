import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from './models/todo';
import { MdDialog, MdDialogConfig, MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/state';
import { TodoActions } from './actions/todo-actions';

@Component({
  selector: 'ngrxfire-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos: Observable<Todo[]>;

  /**
   * Constructor of TodosComponent
   * @param store
   * @param todoActions
   * @param mdDialog
   * @param mdSnackBar
   * @param translateService
   */
  constructor(private store: Store<AppState>, private todoActions: TodoActions, private mdDialog: MdDialog,
              private mdSnackBar: MdSnackBar, private translateService: TranslateService) {
    this.store.dispatch(this.todoActions.getAllTodos());
  }

  /**
   * NgOnInit for TodosComponent
   */
  ngOnInit() {
    this.todos = this.store.select('todoList');
  }

  /**
   * Opens a dialog for new TodoElement
   */
  openNewTodoDialog() {
    const dialogConfig: MdDialogConfig = new MdDialogConfig();
    dialogConfig.width = '400px';

    const dialogRef = this.mdDialog.open(AddTodoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(todoElement => {
      if (todoElement) {
        const snackBarConfig = new MdSnackBarConfig();
        snackBarConfig.duration = 2000;
        this.mdSnackBar.open(this.translateService.instant('todos.snackBar.addTodoSuccess'), null, snackBarConfig);
        this.store.dispatch(this.todoActions.addTodo(todoElement));
      }
    });
  }

  /**
   * Removes a TodoElement from the list
   * @param todoElement
   */
  removeTodo(todoElement: Todo) {
    this.store.dispatch(this.todoActions.removeTodo(todoElement));
  }
}
