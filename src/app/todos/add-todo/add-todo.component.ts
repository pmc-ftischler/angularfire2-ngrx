import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Todo } from '../models/todo';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngrxfire-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  public formGroup: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required)
  });

  /**
   * Constructor of AddTodoComponent
   * @param mdDialogRef
   */
  constructor(public mdDialogRef: MdDialogRef<AddTodoComponent>) {
  }

  /**
   * Submits the input values
   */
  submit() {
    const todo: Todo = {
      title: this.title.value,
      text: this.text.value
    };
    this.mdDialogRef.close(this.formGroup.value);
  }

  /**
   * Closes the dialog
   */
  closeDialog() {
    this.mdDialogRef.close();
  }

  /**
   * Getter for title
   * @returns {AbstractControl|null}
   */
  get title() {
    return this.formGroup.get('title');
  }

  /**
   * Getter for text
   * @returns {AbstractControl|null}
   */
  get text() {
    return this.formGroup.get('text');
  }
}
