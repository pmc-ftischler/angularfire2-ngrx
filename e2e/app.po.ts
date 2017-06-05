import { browser, by, element } from 'protractor';

export class Angularfire2NgrxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
