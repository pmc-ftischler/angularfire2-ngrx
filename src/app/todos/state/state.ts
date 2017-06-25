import { TodoListState } from '../reducers/todo-list';
import { SpinnerState } from '../reducers/spinner';

export interface AppState {
  todoList: TodoListState;
  spinner: SpinnerState;
}
