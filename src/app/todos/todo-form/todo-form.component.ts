import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngrxfire-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Input() todoElement: Todo;
  @Output() formClosed: EventEmitter<Todo> = new EventEmitter<Todo>();

  public formGroup: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required)
  });

  /**
   * NgOnInit for TodoFormComponent
   */
  ngOnInit() {
    if (this.todoElement) {
      this.formGroup.setValue({
        title: this.todoElement.title,
        text: this.todoElement.text
      });
    }
  }

  /**
   * Submits the input values
   */
  submit() {
    if (!this.formGroup.valid) {
      return false;
    }

    let todoElement: Todo;

    if (this.todoElement) {
      if (this.todoElement.text !== this.text.value || this.todoElement.title !== this.title.value) {
        todoElement = this.todoElement;
        todoElement.title = this.title.value;
        todoElement.text = this.text.value;
      }
    } else {
      todoElement = {
        title: this.title.value,
        text: this.text.value
      };
    }

    this.formClosed.emit(todoElement);
  }

  /**
   * Closes the dialog
   */
  closeDialog() {
    this.formClosed.emit();
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
