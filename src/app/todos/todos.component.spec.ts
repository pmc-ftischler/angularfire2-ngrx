import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import {
  MdButtonModule, MdCardModule, MdDialogModule, MdListModule, MdSnackBarModule,
  MdTooltipModule
} from '@angular/material';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { StoreModule } from '@ngrx/store';

import state from './state/state';
import { TodoActions } from './actions/todo-actions';
import { TodosService } from './services/todos.service';
import { SpinnerActions } from './actions/spinner-actions';
import { TodoEffects } from './effects/todo-effects';

class TranslateServiceMock extends TranslateService {
  constructor() {
    super(null, null, null, null);
  }
  get(param): Observable<any> {
    return Observable.from(param);
  }
}

class TranslatePipeMock extends TranslatePipe {
  transform(param) {
    return param;
  }
}

fdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdCardModule,
        MdButtonModule,
        MdListModule,
        MdDialogModule,
        MdTooltipModule,
        MdSnackBarModule,
        TranslateModule.forRoot(),
        StoreModule.provideStore(state)
      ],
      declarations: [
        TodosComponent,
        TranslatePipeMock
      ],
      providers: [
        {provide: TranslateService, useClass: TranslateServiceMock},
        TodosService,
        TodoEffects,
        TodoActions,
        SpinnerActions
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
