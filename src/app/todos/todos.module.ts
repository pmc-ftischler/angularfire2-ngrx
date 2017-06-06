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
  MdProgressSpinnerModule, MdSnackBarModule
} from '@angular/material';
import { TodosService } from './services/todos.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TodoEffects } from './effects/todo-effects';
import { TodoActions } from './actions/todo-actions';
import { StoreModule } from '@ngrx/store';
import state from './state/state';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    AngularFireDatabaseModule,
    StoreModule.provideStore(state),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    EffectsModule.run(TodoEffects)
  ],
  declarations: [
    TodosComponent,
    AddTodoComponent
  ],
  providers: [
    TodosService,
    TodoEffects,
    TodoActions
  ],
  entryComponents: [
    AddTodoComponent
  ]
})
export class TodosModule {
}
