import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todo';
import { APP_CONFIG } from '../../config/app.conf';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class TodosService {

  /**
   * Constructor of TodosService
   * @param angularFireDatabase
   */
  constructor(private angularFireDatabase: AngularFireDatabase) { }

  /**
   * Gets TodoElements from Firebase Live Database
   * @returns {Observable<T>}
   */
  getTodos(): Observable<Todo[]> {
    return this.angularFireDatabase
      .list(APP_CONFIG.databaseName);
  }

  /**
   * Adds todoElement to Firebase Live Database
   * @param todoElement
   * @returns {Observable<void>}
   */
  addTodo(todoElement: Todo): Observable<void> {
    return Observable.from(this.angularFireDatabase
      .list(APP_CONFIG.databaseName)
      .push(todoElement));
  }

  /**
   * Removes todoElement from Firebase Live Database
   * @param todoElement
   * @returns {Observable<void>}
   */
  removeTodo(todoElement: Todo): Observable<void> {
    return Observable.from(this.angularFireDatabase
      .object(`${APP_CONFIG.databaseName}/${todoElement.$key}`)
      .remove());
  }

  /**
   * Updates todoElement from Firebase Live Database
   * @param todoElement
   * @returns {Observable<void>}
   */
  updateTodo(todoElement: Todo): Observable<void> {
    return Observable.from(this.angularFireDatabase
      .object(`${APP_CONFIG.databaseName}/${todoElement.$key}`)
      .update(todoElement));
  }
}
