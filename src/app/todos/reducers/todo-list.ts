import { Action } from '@ngrx/store';
import { Todo } from '../models/todo';
import { findIndex } from 'lodash-es';
import { TodoActions } from '../actions/todo-actions';

export type TodoListState = Todo[];
export const initialTodoListState: TodoListState = [];

export function todoListReducer (state = initialTodoListState, action: Action): TodoListState {
  switch (action.type) {
    case TodoActions.GET_ALL_TODOS_SUCCESS:
      return action.payload;
    case TodoActions.ADD_TODO:
      return [...state, action.payload];
    case TodoActions.UPDATE_TODO:
      const index = findIndex(state, {id: action.payload.id});
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          action.payload,
          ...state.slice(index + 1)
        ];
      }
      return state;
    case TodoActions.REMOVE_TODO:
      return state.filter(todo => {
        return todo.$key !== action.payload.$key;
      });
    default:
      return state;
  }
}
