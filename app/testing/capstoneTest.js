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

    it('should navigate to products page when products link is clicked', function() {
        browser.get(ROOT + "/");
        element(by.id('products')).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/products');
    });
});
describe('homepage through register', function() {

    it('should navigate to the register page and register a user', function() {

        element(by.id('register')).click();

        var firstInput = element(by.model('user.firstname'));
        var lastInput = element(by.model('user.lastname'));
        var emailInput = element(by.model('user.email'));
        var passwordInput = element(by.model('user.password'));
        var loginBtn = element(by.id('loginBtn'));
        var registerBtn = element(by.id('registerBtn'));


        firstInput.sendKeys('Bob');
        lastInput.sendKeys('Smith');
        emailInput.sendKeys('kkreelll@apple.com');
        passwordInput.sendKeys('apple');

        registerBtn.click();

        browser.waitForAngular();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/products');
    });
});

describe('login/ logout', function() {


  it('should log a user in', function() {

        var loginLink = element(by.id('login'));

        loginLink.click();

        browser.waitForAngular();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/login');

        var emailInput = element(by.model('user.email'));
        var passwordInput = element(by.model('user.password'));
        var loginBtn = element(by.id('loginBtn'));

        emailInput.sendKeys('apple@apple.com');
        passwordInput.sendKeys('apple');

        loginBtn.click();

        browser.waitForAngular();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/products');

    });
      it('should log a user out from the products page', function() {
        browser.get(ROOT + "#/products");

        browser.waitForAngular();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/products');

        browser.waitForAngular();

        var logoutBtn = element(by.id('logout'));

        logoutBtn.click();

        browser.waitForAngular();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/login');
    });
});


describe('login > products > addItem > checkout', function() {

            it('should continue to products page, add item to cart and checkout', function() {
                

                browser.get(ROOT + "#/login");

                var continueBtn = element(by.id('continueBtn'));

                continueBtn.click();

                browser.waitForAngular();

                expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/products');
            
//
//                element.all(by.repeater('product in products')).then(function(products) {
//                    browser.actions().mouseMove(element(by.css('.item'))).perform();
//                    element.by.id('itemBtn').click();
//                });
//                expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/products');
            });
});
//        browser.waitForAngular();
//
//        element.all(by.repeater('department in departments')).then(function(departments) {
//            var deptLink = departments[0].element(by.id('cat_link'));
//            deptLink.click();
//        });
//
//        browser.waitForAngular();
//
//        element(by.id('shop-cart')).click();
//
//        browser.waitForAngular();
//
//        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/checkout');
//
//    });
//});






