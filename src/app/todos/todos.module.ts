import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdProgressSpinnerModule } from '@angular/material';
import { TodosService } from './services/todos.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdProgressSpinnerModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    TodosComponent
  ],
  providers: [
    TodosService
  ]
})
export class TodosModule { }
