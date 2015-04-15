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
    emailInput.sendKeys('kqzzclwlxl@apple.com');
    passwordInput.sendKeys('apple');

    registerBtn.click();

    browser.waitForAngular();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/products');

    //var profileRef = new Firebase(FIREBASE_URL + 'users/' + regUser.uid);

    //profileRef.$remove();

  });
});

describe('login/ add item', function() {

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

  it('should continue to products page, add item to cart and checkout', function() {

    browser.get(ROOT + "/#/products");

    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/products');

    browser.sleep(3000);

    element.all(by.repeater('product in products')).then(function(products) {
      browser.actions().mouseMove(element(by.css('.item'))).perform();
      var btn = element(by.css('.itemBtn'));
      btn.click();
      browser.sleep(9000);
    });

    browser.get(ROOT + "/#/products/947196901671830033");
    browser.sleep(9000);
    var cart = element(by.id('itemCount'));
    expect(cart.getText()).toEqual('1');
  });

  it('should navigate to checkout page and have checkout page populated', function() {
    var checkoutBtn = element(by.id('itemCount'));
    checkoutBtn.click();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/checkout');

    var totalElement = element(by.css('.item-total'));
    var itemTotal = totalElement.getText();
    expect(itemTotal.getText()).toEqual('$60.00');

  });

});
