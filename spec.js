//spec.js
describe('Protractor Demo App', function() {
  it('should be ble to search', function() {
    browser.get('http://www.mysolarcity.com/');
    expect(browser.isElementPresent(element(by.id('logo')))).toBe(true);
    element(by.class('.my-solarcity')).click();
    element(by.id('username'));
   
  });
});
