var expectedConditions = protractor.ExpectedConditions;


describe('Accesing Signalfx home page', function () {

    it('verify the title first', function () {

        browser.ignoreSynchronizationation = true;
        browser.waitForAngularEnabled(false);
        browser.get('https://app.signalfx.com');
        expect(browser.getTitle()).toEqual('Login');
        element(by.model('user.email')).sendKeys("chaitujandhyala@gmail.com");
        element(by.model('user.password')).sendKeys("CipherCloud@123");
        element(by.css('.login-button')).click();

        var navElement = element(by.css('.sf-nav-menu-bar'));
        browser.wait(expectedConditions.visibilityOf(navElement), 30000);
        browser.setLocation('catalog');
        browser.sleep(10000);
        var title = browser.getTitle();
        console.log(title);
        console.log(title);
    });
});
