import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class SpinnerActions {
  public static readonly ACTIVATE_SPINNER = '[SPINNER] ACTIVATE';
  public static readonly DEACTIVATE_SPINNER = '[SPINNER] DEACTIVATE';

  public activateSpinner(): Action {
    return {
      type: SpinnerActions.ACTIVATE_SPINNER
    };
  }

  public deactivateSpinner(): Action {
    return {
      type: SpinnerActions.DEACTIVATE_SPINNER
    };
  }
}
