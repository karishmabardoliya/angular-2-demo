import { AngularDemo2Page } from './app.po';

describe('angular-demo-2 App', function() {
  let page: AngularDemo2Page;

  beforeEach(() => {
    page = new AngularDemo2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-demo-2 works!');
  });
});
