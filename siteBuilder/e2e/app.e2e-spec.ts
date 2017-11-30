import { SiteBuilderPage } from './app.po';

describe('site-builder App', function() {
  let page: SiteBuilderPage;

  beforeEach(() => {
    page = new SiteBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
