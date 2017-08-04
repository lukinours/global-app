import { GlobalAppPage } from './app.po';

describe('global-app App', () => {
  let page: GlobalAppPage;

  beforeEach(() => {
    page = new GlobalAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
