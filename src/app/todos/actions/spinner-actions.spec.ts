import { TestBed, inject } from '@angular/core/testing';

import { SpinnerActions } from './spinner-actions';

describe('SpinnerActions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerActions]
    });
  });

  it('should be created', inject([SpinnerActions], (service: SpinnerActions) => {
    expect(service).toBeTruthy();
  }));
});
