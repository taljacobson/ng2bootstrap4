import { Ng2bootstrap4Page } from './app.po';

describe('ng2bootstrap4 App', function() {
  let page: Ng2bootstrap4Page;

  beforeEach(() => {
    page = new Ng2bootstrap4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
