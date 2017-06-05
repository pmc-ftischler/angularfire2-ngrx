import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todo';
import { APP_CONFIG } from '../../config/app.conf';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/share';

@Injectable()
export class TodosService {

  constructor(private angularFireDatabase: AngularFireDatabase) {
  }

  public getTodos(): Observable<Todo[]> {
    return this.angularFireDatabase.list(APP_CONFIG.databaseName)
      .share();
  }

  public addTodo(todo: Todo): Observable<void> {
    return Observable.from(this.angularFireDatabase.list(APP_CONFIG.databaseName).push(todo));
  }

  public removeTodo(todo: Todo): Observable <void> {
    return Observable.from(this.angularFireDatabase.object(`${APP_CONFIG.databaseName}/${todo._id}`).remove());
  }

  public updateTodo(todo: Todo): Observable<void> {
    return Observable.from(this.angularFireDatabase.object(`${APP_CONFIG.databaseName}/${todo._id}`).update(todo));
  }
}
