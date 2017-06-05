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

  constructor(public mdDialogRef: MdDialogRef<AddTodoComponent>) { }

  submit() {
    const todo: Todo = {
      title: this.title.value,
      text: this.text.value
    };
    this.mdDialogRef.close(this.formGroup.value);
  }

  public get title() {
    return this.formGroup.get('title');
  }

  public get text() {
    return this.formGroup.get('text');
  }
}
