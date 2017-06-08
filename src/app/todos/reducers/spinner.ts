import { Action } from '@ngrx/store';
import { findIndex } from 'lodash-es';
import { Spinner } from '../models/spinner';
import { TodoActions } from '../actions/todo-actions';
import { SpinnerActions } from '../actions/spinner-actions';

export type SpinnerState = Spinner;
export const initialSpinnerState: SpinnerState = {
  busy: true
};

export function spinnerReducer(state = initialSpinnerState, action: Action): SpinnerState {
  switch (action.type) {
    case SpinnerActions.ACTIVATE_SPINNER:
    case TodoActions.GET_ALL_TODOS:
      return {
        busy: true
      };

    case SpinnerActions.DEACTIVATE_SPINNER:
    case TodoActions.GET_ALL_TODOS_SUCCESS:
      return {
        busy: false
      };

    default:
      return state;
  }
}
