import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTodoComponent } from './update-todo.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { MD_DIALOG_DATA, MdButtonModule, MdDialogModule, MdDialogRef, MdInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

class TranslatePipeMock extends TranslatePipe {
  transform(param) {
    return param;
  }
}

class TranslateServiceMock extends TranslateService {
  constructor() {
    super(null, null, null, null);
  }

  get(param): Observable<any> {
    return Observable.of(param);
  }
}

const mockDialogData = {
  todoElement: {
    title: 'Test',
    text: 'Test'
  }
};

const mockDialogRef = {
  close: jasmine.createSpy('close')
};

fdescribe('UpdateTodoComponent', () => {
  let component: UpdateTodoComponent;
  let fixture: ComponentFixture<UpdateTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        MdInputModule,
        MdButtonModule,
        MdDialogModule,
        ReactiveFormsModule
      ],
      declarations: [
        UpdateTodoComponent,
        TodoFormComponent,
        TranslatePipeMock
      ],
      providers: [
        {provide: TranslateService, useClass: TranslateServiceMock},
        {provide: MD_DIALOG_DATA, useValue: mockDialogData},
        {provide: MdDialogRef, useValue: mockDialogRef}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
