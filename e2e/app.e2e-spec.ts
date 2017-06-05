import { Angularfire2NgrxPage } from './app.po';

describe('angularfire2-ngrx App', () => {
  let page: Angularfire2NgrxPage;

  beforeEach(() => {
    page = new Angularfire2NgrxPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
