import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Todo } from '../models/todo';

@Component({
  selector: 'ngrxfire-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent {
  /**
   * Constructor of AddTodoComponent
   * @param mdDialogRef
   */
  constructor(public mdDialogRef: MdDialogRef<AddTodoComponent>) {
  }

  /**
   * Method to be called on formClosed event
   * @param todoElement
   */
  formClosed(todoElement: Todo) {
    this.mdDialogRef.close(todoElement);
  }
}
