import { combineReducers } from '@ngrx/store';
import { todoListReducer, TodoListState } from '../reducers/todo-list';
import { compose } from '@ngrx/core/compose';

export default compose(combineReducers)({
  todoList: todoListReducer
});

export interface AppState {
  todoList: TodoListState;
}
