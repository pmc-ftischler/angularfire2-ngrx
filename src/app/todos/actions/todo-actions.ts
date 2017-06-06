import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Todo } from '../models/todo';

@Injectable()
export class TodoActions {
  public static readonly GET_ALL_TODOS = '[TODO] GET ALL';
  public static readonly GET_ALL_TODOS_SUCCESS = '[TODO] GET ALL SUCCESS';
  public static readonly ADD_TODO = '[TODO] ADD';
  public static readonly UPDATE_TODO = '[TODO] UPDATE';
  public static readonly REMOVE_TODO = '[TODO] REMOVE';

  public getAllTodos(): Action {
    return {
      type: TodoActions.GET_ALL_TODOS
    };
  }

  public getAllTodosSuccess(todos: Todo[]): Action {
    return {
      type: TodoActions.GET_ALL_TODOS_SUCCESS,
      payload: todos
    };
  }

  public addTodo(todo: Todo): Action {
    return {
      type: TodoActions.ADD_TODO,
      payload: todo
    };
  }

  public updateTodo(todo: Todo): Action {
    return {
      type: TodoActions.UPDATE_TODO,
      payload: todo
    };
  }

  public removeTodo(todo: Todo): Action {
    return {
      type: TodoActions.REMOVE_TODO,
      payload: todo
    };
  }
}
