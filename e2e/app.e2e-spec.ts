import { MyToDoAppPage } from './app.po';

describe('my-to-do-app App', () => {
  let page: MyToDoAppPage;

  beforeEach(() => {
    page = new MyToDoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
