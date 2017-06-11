import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { MdIconModule, MdToolbarModule } from '@angular/material';

class TranslateServiceMock extends TranslateService {
  constructor() {
    super(null, null, null, null);
  }

  get(param): Observable<any> {
    return Observable.of(param);
  }
}

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          MdToolbarModule,
          MdIconModule,
          TranslateModule.forRoot()
        ],
        declarations: [
          ToolbarComponent
        ],
        providers: [
          {provide: TranslateService, useClass: TranslateServiceMock}
        ]
      })
        .compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
