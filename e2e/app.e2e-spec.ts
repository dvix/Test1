import { BuildTestPage } from './app.po';

describe('build-test App', () => {
  let page: BuildTestPage;

  beforeEach(() => {
    page = new BuildTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
