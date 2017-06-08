import { combineReducers } from '@ngrx/store';
import { todoListReducer, TodoListState } from '../reducers/todo-list';
import { compose } from '@ngrx/core/compose';
import { spinnerReducer, SpinnerState } from '../reducers/spinner';

export default compose(combineReducers)({
  todoList: todoListReducer,
  spinner: spinnerReducer
});

export interface AppState {
  todoList: TodoListState;
  spinner: SpinnerState;
}
