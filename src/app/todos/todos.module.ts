import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdIconModule, MdInputModule,
  MdListModule,
  MdProgressSpinnerModule, MdSnackBarModule, MdTooltipModule
} from '@angular/material';
import { TodosService } from './services/todos.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TodoEffects } from './effects/todo-effects';
import { TodoActions } from './actions/todo-actions';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { SpinnerActions } from './actions/spinner-actions';
import { todoListReducer } from './reducers/todo-list';
import { spinnerReducer } from './reducers/spinner';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    TodosRoutingModule,
    ReactiveFormsModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdDialogModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdSnackBarModule,
    MdTooltipModule,
    AngularFireDatabaseModule,
    StoreModule.provideStore({
      todoList: todoListReducer,
      spinner: spinnerReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    EffectsModule.run(TodoEffects)
  ],
  declarations: [
    TodosComponent,
    AddTodoComponent,
    UpdateTodoComponent,
    TodoFormComponent
  ],
  providers: [
    TodosService,
    TodoEffects,
    TodoActions,
    SpinnerActions
  ],
  entryComponents: [
    AddTodoComponent,
    UpdateTodoComponent
  ]
})
export class TodosModule {
}
