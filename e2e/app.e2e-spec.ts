import { KCMDPage } from './app.po';

describe('kcmd App', function() {
  let page: KCMDPage;

  beforeEach(() => {
    page = new KCMDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
