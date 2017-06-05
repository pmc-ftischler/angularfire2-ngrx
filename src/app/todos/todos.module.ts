import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { MdButtonModule, MdCardModule, MdIconModule, MdListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdIconModule
  ],
  declarations: [TodosComponent]
})
export class TodosModule { }
