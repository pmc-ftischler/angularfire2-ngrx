import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { MdButtonModule, MdCardModule, MdListModule, MdTooltipModule } from '@angular/material';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { StoreModule } from '@ngrx/store';

import state from './state/state';

class TranslateServiceMock extends TranslateService {
  constructor() {
    super(null, null, null, null);
  }
  get(param): Observable<any> {
    return Observable.from(param);
  }
}

fdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdCardModule,
        MdListModule,
        MdButtonModule,
        MdTooltipModule,
        TranslateModule.forRoot(),
        StoreModule.provideStore(state),
      ],
      declarations: [
        TodosComponent
      ],
      providers: [
        {provide: TranslateService, useClass: TranslateServiceMock}
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
