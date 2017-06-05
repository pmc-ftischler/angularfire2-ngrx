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
    AngularFireDatabaseModule
  ],
  declarations: [
    TodosComponent,
    AddTodoComponent
  ],
  providers: [
    TodosService
  ],
  entryComponents: [
    AddTodoComponent
  ]
})
export class TodosModule {
}
