import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from './models/todo';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'ngrxfire-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos: Observable<Todo[]> = this.todosService.getTodos();

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

}
