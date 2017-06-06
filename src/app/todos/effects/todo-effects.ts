import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TodoActions } from '../actions/todo-actions';
import { TodosService } from '../services/todos.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class TodoEffects {
  @Effect() getTodos$ = this.update$
    .ofType(TodoActions.GET_ALL_TODOS)
    .switchMap(() => this.todosService.getTodos())
    .map(todos => this.todoActions.getAllTodosSuccess(todos));

  @Effect() addTodo$ = this.update$
    .ofType(TodoActions.ADD_TODO)
    .map(action => action.payload)
    .switchMap(todo => this.todosService.addTodo(todo))
    .filter(() => false);

  @Effect() updateTodo$ = this.update$
    .ofType(TodoActions.UPDATE_TODO)
    .map(action => action.payload)
    .switchMap(todo => this.todosService.updateTodo(todo))
    .filter(() => false);

  @Effect() removeTodo$ = this.update$
    .ofType(TodoActions.REMOVE_TODO)
    .map(action => action.payload)
    .switchMap(todo => this.todosService.removeTodo(todo))
    .filter(() => false);

  constructor(private update$: Actions, private todoActions: TodoActions, private todosService: TodosService) { }
}
