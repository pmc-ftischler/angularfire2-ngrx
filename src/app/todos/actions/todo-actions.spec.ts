import { TestBed, inject } from '@angular/core/testing';

import { TodoActions } from './todo-actions';

describe('TodoActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoActions]
    });
  });

  it('should be created', inject([TodoActions], (service: TodoActions) => {
    expect(service).toBeTruthy();
  }));
});
