import { TestBed, inject } from '@angular/core/testing';

import { TodoEffects } from './todo-effects';

describe('TodoEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoEffects]
    });
  });

  it('should be created', inject([TodoEffects], (service: TodoEffects) => {
    expect(service).toBeTruthy();
  }));
});
