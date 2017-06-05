import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngrxfire-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * Constructor for AppComponent
   * @param translateService
   */
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('de');
    this.translateService.use('de');
  }
}
