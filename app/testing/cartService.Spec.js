'use strict';

describe('cartservice', function() {
      var scope, $rootScope, cartService, $location;

      beforeEach(module('storeApp'));
      beforeEach(module('storeApp.mockThirdParty'));

        beforeEach(inject(function(_$rootScope_, _cartService_, _$location_) {
          $location = _$location_;
          $rootScope = _$rootScope_;
          cartService = _cartService_;
        }));

      
        it('should contain cartService', function() {
          expect(cartService).not.toEqual(null);
          expect(cartService).toBeDefined();
        });

        it('should return a list of items when calling cartService.itemList', function() {
          cartService.itemList().then(function(data) {
            expect(data).toBe(mockCartData);
          });
          $rootScope.$apply();
        });

        it('functions should exist within cartService', function () { 
          expect(angular.isFunction(cartService.itemList)).toBe(true);
          expect(angular.isFunction(cartService.addItem)).toBe(true);
          expect(angular.isFunction(cartService.checkout)).toBe(true);
          expect(angular.isFunction(cartService.toProducts)).toBe(true);
        });

        it('should return data about item added when calling cartService.addItem', function() {
          cartService.addItem(948219829737751316).then(function(data) {
            expect(data).toBe(mockAddItemData);
          });
          $rootScope.$apply();
        });

        it('should return a list of items when calling cartService.checkout', function() {
          cartService.checkout().then(function(data) {
            expect(data).toBe(mockCheckoutData);
          });
          $rootScope.$apply();
        });


        it('should navigate to the products route', function() {
          cartService.toProducts();
          expect($location.path()).toBe('/products');
        });
      });
