'use strict';

var ROOT = "http://localhost:8080";

describe('home page tests', function() {

    it('should display the home page and include login, register and products links', function() {
        browser.get(ROOT + "/");
        expect(element.all(by.css('.access-links')).count()).toBe(1);
        expect(element.all(by.css('.access-links li a')).count()).toBe(2);
    });

    it('should navigate to login page when login link is clicked', function() {
        element(by.id('login')).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/login');
    });

    it('should navigate to registration page when login link is clicked', function() {
        browser.get(ROOT + "/");
        element(by.id('register')).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/register');
    });

    it('should navigate to registration page when login link is clicked', function() {
        browser.get(ROOT + "/");
        element(by.id('products')).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/products');
    });

});
describe('homepage through register to products', function() {

    it('should navigate to the register page and register a user in', function() {

        element(by.id('register')).click();

        var firstInput = element(by.model('user.firstname'));
        var lastInput = element(by.model('user.lastname'));
        var emailInput = element(by.model('user.email'));
        var passwordInput = element(by.model('user.password'));
        var loginBtn = element(by.id('loginBtn'));
        var registerBtn = element(by.id('registerBtn'));


        firstInput.sendKeys('Bob');
        lastInput.sendKeys('Smith');
        emailInput.sendKeys('bsmith@apple.com');
        passwordInput.sendKeys('apple');

        registerBtn.click();

        browser.waitForAngular();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/products');

        //check to show that user is logged in
        //log user out successfully

    });
});


describe('homepage through login to products', function() {

    xit('should navigate to the login page and log a user in', function() {

        element(by.id('login')).click();

        var emailInput = element(by.model('user.email'));
        var passwordInput = element(by.model('user.password'));
        var loginBtn = element(by.id('loginBtn'));

        emailInput.sendKeys('apple@apple.com');
        passwordInput.sendKeys('apple');

        loginBtn.click();

        browser.waitForAngular();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/products');

    });
});


});
// add items to cart.
// checkout specific product pages
// navigate to home page product page and register pages
// go to checkout page after adding items to cart.
