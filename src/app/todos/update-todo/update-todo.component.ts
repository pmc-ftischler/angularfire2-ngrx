import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Todo } from '../models/todo';

@Component({
  selector: 'ngrxfire-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateTodoComponent {
  public todoElement: Todo;

  /**
   * Constructor of UpdateTodoComponent
   * @param data
   * @param mdDialogRef
   */
  constructor(@Inject(MD_DIALOG_DATA) public data: any, public mdDialogRef: MdDialogRef<UpdateTodoComponent>) {
    this.todoElement = data.todoElement;
  }

  /**
   * Method to be called on formClosed event
   * @param todoElement
   */
  formClosed(todoElement: Todo) {
    this.mdDialogRef.close(todoElement);
  }
}
