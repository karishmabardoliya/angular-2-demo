export class AngularDemo2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-demo-2-app h1')).getText();
  }
}
