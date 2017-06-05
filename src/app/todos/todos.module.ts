import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    MdCardModule
  ],
  declarations: [TodosComponent]
})
export class TodosModule { }
