'use strict';

angular.module('storeApp.mockThirdParty', [])
  .factory('mockThirdParty', ['$provide', function($provide) {

    var mockProductData = [{
      "id": "948221187652059927",
      "order": null,
      "created_at": "2015-03-25 04:13:04",
      "updated_at": "2015-03-25 04:13:14",
      "sku": "5012",
      "title": "Tent",
      "slug": "tent",
      "price": 60,
      "sale_price": 0,
      "status": {
        "value": "Live",
        "data": {
          "key": "1",
          "value": "Live"
        }
      },
      "category": {
        "value": "Outdoors",
        "data": {
          "944589239574593732": {
            "id": "944589239574593732",
            "order": null,
            "created_at": "2015-03-20 03:57:06",
            "updated_at": "2015-03-25 01:44:32",
            "parent": null,
            "slug": "outdoors",
            "status": {
              "value": "Live",
              "data": {
                "key": "1",
                "value": "Live"
              }
            },
            "title": "Outdoors",
            "description": "Outdoor items"
          }
        }
      },
      "stock_level": 400,
      "stock_status": {
        "value": "In Stock",
        "data": {
          "key": "1",
          "value": "In Stock"
        }
      },
      "description": "<p>asdf</p>",
      "requires_shipping": {
        "value": "Yes",
        "data": {
          "key": "1",
          "value": "Yes"
        }
      },
      "weight": 0,
      "height": 0,
      "width": 0,
      "depth": 0,
      "catalog_only": {
        "value": "No",
        "data": {
          "key": "0",
          "value": "No"
        }
      },
      "tax_band": {
        "value": "Default",
        "data": {
          "id": "944589246797185285",
          "title": "Default",
          "description": null,
          "rate": 20,
          "created_at": null,
          "updated_at": null
        }
      },
      "collection": null,
      "brand": null,
      "pricing": {
        "formatted": {
          "with_tax": "£72.00",
          "without_tax": "£60.00",
          "tax": "£12.00"
        },
        "rounded": {
          "with_tax": 72,
          "without_tax": 60,
          "tax": 12
        },
        "raw": {
          "with_tax": 72,
          "without_tax": 60,
          "tax": 12
        }
      },
      "is_variation": false,
      "modifiers": [],
      "images": [{
        "id": 948221246296817700,
        "name": "tent.jpg",
        "url": {
          "http": "http://commercecdn.com/944589239381656329/c9d90f0d-3ab8-4970-8fc5-659bcb9b6354.jpeg",
          "https": "https://commercecdn.com/944589239381656329/c9d90f0d-3ab8-4970-8fc5-659bcb9b6354.jpeg"
        },
        "segments": {
          "domain": "commercecdn.com/",
          "suffix": "944589239381656329/c9d90f0d-3ab8-4970-8fc5-659bcb9b6354.jpeg"
        }
      }]
    }];

    var mockCartData = {
      "contents": [],
      "total_items": 0,
      "total_unique_items": 0,
      "totals": {
        "formatted": {
          "with_tax": "£0.00",
          "without_tax": "£0.00"
        },
        "rounded": {
          "with_tax": 0,
          "without_tax": 0
        },
        "raw": {
          "with_tax": 0,
          "without_tax": 0
        }
      },
      "currency": {
        "id": "944589245429842169",
        "code": "GBP",
        "format": "£{price}",
        "decimal": ".",
        "thousand": ",",
        "rounding": null,
        "exchange": 0
      }
    };

    var mockCheckoutData = {
      "cart": {
        "contents": {
          "59035d126fdf16d964081baa3d5a0413": {
            "id": "948221187652059927",
            "quantity": 1,
            "order": null,
            "created_at": "2015-03-25 04:13:04",
            "updated_at": "2015-03-25 04:13:14",
            "sku": "5012",
            "title": "Tent",
            "slug": "tent",
            "price": 60,
            "sale_price": 0,
            "status": {
              "value": "Live",
              "data": {
                "key": "1",
                "value": "Live"
              }
            },
            "category": {
              "value": "Outdoors",
              "data": {
                "944589239574593732": {
                  "id": "944589239574593732",
                  "order": null,
                  "created_at": "2015-03-20 03:57:06",
                  "updated_at": "2015-03-25 01:44:32",
                  "parent": null,
                  "slug": "outdoors",
                  "status": {
                    "value": "Live",
                    "data": {
                      "key": "1",
                      "value": "Live"
                    }
                  },
                  "title": "Outdoors",
                  "description": "Outdoor items"
                }
              }
            },
            "stock_level": 400,
            "stock_status": {
              "value": "In Stock",
              "data": {
                "key": "1",
                "value": "In Stock"
              }
            },
            "description": "<p>asdf</p>",
            "requires_shipping": {
              "value": "Yes",
              "data": {
                "key": "1",
                "value": "Yes"
              }
            },
            "weight": 0,
            "height": 0,
            "width": 0,
            "depth": 0,
            "catalog_only": {
              "value": "No",
              "data": {
                "key": "0",
                "value": "No"
              }
            },
            "tax_band": {
              "value": "Default",
              "data": {
                "id": "944589246797185285",
                "title": "Default",
                "description": null,
                "rate": 20,
                "created_at": null,
                "updated_at": null
              }
            },
            "collection": null,
            "brand": null,
            "pricing": {
              "pre_discount": {
                "formatted": {
                  "with_tax": "£72.00",
                  "without_tax": "£60.00",
                  "tax": "£12.00"
                },
                "rounded": {
                  "with_tax": 72,
                  "without_tax": 60,
                  "tax": 12
                },
                "raw": {
                  "with_tax": 72,
                  "without_tax": 60,
                  "tax": 12
                }
              },
              "post_discount": {
                "formatted": {
                  "with_tax": "£72.00",
                  "without_tax": "£60.00",
                  "tax": "£12.00"
                },
                "rounded": {
                  "with_tax": 72,
                  "without_tax": 60,
                  "tax": 12
                },
                "raw": {
                  "with_tax": 72,
                  "without_tax": 60,
                  "tax": 12
                }
              }
            },
            "is_variation": false,
            "modifiers": [],
            "images": [{
              "id": 948221246296817700,
              "name": "tent.jpg",
              "url": {
                "http": "http://commercecdn.com/944589239381656329/c9d90f0d-3ab8-4970-8fc5-659bcb9b6354.jpeg",
                "https": "https://commercecdn.com/944589239381656329/c9d90f0d-3ab8-4970-8fc5-659bcb9b6354.jpeg"
              },
              "segments": {
                "domain": "commercecdn.com/",
                "suffix": "944589239381656329/c9d90f0d-3ab8-4970-8fc5-659bcb9b6354.jpeg"
              }
            }],
            "name": "Tent",
            "tax": 20,
            "total": 72,
            "total_before_tax": 60,
            "totals": {
              "pre_discount": {
                "formatted": {
                  "with_tax": "£72.00",
                  "without_tax": "£60.00"
                },
                "rounded": {
                  "with_tax": 72,
                  "without_tax": 60
                },
                "raw": {
                  "with_tax": 72,
                  "without_tax": 60
                }
              },
              "post_discount": {
                "formatted": {
                  "with_tax": "£72.00",
                  "without_tax": "£60.00"
                },
                "rounded": {
                  "with_tax": 72,
                  "without_tax": 60
                },
                "raw": {
                  "with_tax": 72,
                  "without_tax": 60
                }
              }
            }
          },
          "55fe70bbbe446a930d0e413a55c185be": {
            "id": "948220372480688917",
            "quantity": 2,
            "order": null,
            "created_at": "2015-03-25 04:11:27",
            "updated_at": "2015-03-25 04:11:36",
            "sku": "5010",
            "title": "Sun Hat",
            "slug": "sun-hat",
            "price": 30,
            "sale_price": 0,
            "status": {
              "value": "Live",
              "data": {
                "key": "1",
                "value": "Live"
              }
            },
            "category": {
              "value": "Clothing, Outdoors",
              "data": {
                "947196031748014607": {
                  "id": "947196031748014607",
                  "order": null,
                  "created_at": "2015-03-23 18:16:17",
                  "updated_at": "2015-03-25 01:44:32",
                  "parent": null,
                  "slug": "clothing",
                  "status": {
                    "value": "Live",
                    "data": {
                      "key": "1",
                      "value": "Live"
                    }
                  },
                  "title": "Clothing",
                  "description": "<p>Clothing Items</p>"
                },
                "944589239574593732": {
                  "id": "944589239574593732",
                  "order": null,
                  "created_at": "2015-03-20 03:57:06",
                  "updated_at": "2015-03-25 01:44:32",
                  "parent": null,
                  "slug": "outdoors",
                  "status": {
                    "value": "Live",
                    "data": {
                      "key": "1",
                      "value": "Live"
                    }
                  },
                  "title": "Outdoors",
                  "description": "Outdoor items"
                }
              }
            },
            "stock_level": 200,
            "stock_status": {
              "value": "In Stock",
              "data": {
                "key": "1",
                "value": "In Stock"
              }
            },
            "description": "<p>asdf</p>",
            "requires_shipping": {
              "value": "Yes",
              "data": {
                "key": "1",
                "value": "Yes"
              }
            },
            "weight": 0,
            "height": 0,
            "width": 0,
            "depth": 0,
            "catalog_only": {
              "value": "No",
              "data": {
                "key": "0",
                "value": "No"
              }
            },
            "tax_band": {
              "value": "Default",
              "data": {
                "id": "944589246797185285",
                "title": "Default",
                "description": null,
                "rate": 20,
                "created_at": null,
                "updated_at": null
              }
            },
            "collection": null,
            "brand": null,
            "pricing": {
              "pre_discount": {
                "formatted": {
                  "with_tax": "£36.00",
                  "without_tax": "£30.00",
                  "tax": "£6.00"
                },
                "rounded": {
                  "with_tax": 36,
                  "without_tax": 30,
                  "tax": 6
                },
                "raw": {
                  "with_tax": 36,
                  "without_tax": 30,
                  "tax": 6
                }
              },
              "post_discount": {
                "formatted": {
                  "with_tax": "£36.00",
                  "without_tax": "£30.00",
                  "tax": "£6.00"
                },
                "rounded": {
                  "with_tax": 36,
                  "without_tax": 30,
                  "tax": 6
                },
                "raw": {
                  "with_tax": 36,
                  "without_tax": 30,
                  "tax": 6
                }
              }
            },
            "is_variation": false,
            "modifiers": [],
            "images": [{
              "id": 948220432266297300,
              "name": "sun_hat.jpg",
              "url": {
                "http": "http://commercecdn.com/944589239381656329/4cd08d2b-3f86-4746-b5ab-e24ec5f0c533.jpeg",
                "https": "https://commercecdn.com/944589239381656329/4cd08d2b-3f86-4746-b5ab-e24ec5f0c533.jpeg"
              },
              "segments": {
                "domain": "commercecdn.com/",
                "suffix": "944589239381656329/4cd08d2b-3f86-4746-b5ab-e24ec5f0c533.jpeg"
              }
            }],
            "name": "Sun Hat",
            "tax": 20,
            "total": 72,
            "total_before_tax": 60,
            "totals": {
              "pre_discount": {
                "formatted": {
                  "with_tax": "£72.00",
                  "without_tax": "£60.00"
                },
                "rounded": {
                  "with_tax": 72,
                  "without_tax": 60
                },
                "raw": {
                  "with_tax": 72,
                  "without_tax": 60
                }
              },
              "post_discount": {
                "formatted": {
                  "with_tax": "£72.00",
                  "without_tax": "£60.00"
                },
                "rounded": {
                  "with_tax": 72,
                  "without_tax": 60
                },
                "raw": {
                  "with_tax": 72,
                  "without_tax": 60
                }
              }
            }
          },
          "94b243e4e529c37c781f91f151cddd92": {
            "id": "948220750311981846",
            "quantity": 1,
            "order": null,
            "created_at": "2015-03-25 04:12:12",
            "updated_at": "2015-03-25 04:12:21",
            "sku": "5011",
            "title": "Survival Manual",
            "slug": "survival-manual",
            "price": 25,
            "sale_price": 0,
            "status": {
              "value": "Live",
              "data": {
                "key": "1",
                "value": "Live"
              }
            },
            "category": {
              "value": "Books, Outdoors",
              "data": {
                "947197186423128594": {
                  "id": "947197186423128594",
                  "order": null,
                  "created_at": "2015-03-23 18:18:35",
                  "updated_at": "2015-03-25 01:44:32",
                  "parent": null,
                  "slug": "books",
                  "status": {
                    "value": "Live",
                    "data": {
                      "key": "1",
                      "value": "Live"
                    }
                  },
                  "title": "Books",
                  "description": "<p>Books and reading materials</p>"
                },
                "944589239574593732": {
                  "id": "944589239574593732",
                  "order": null,
                  "created_at": "2015-03-20 03:57:06",
                  "updated_at": "2015-03-25 01:44:32",
                  "parent": null,
                  "slug": "outdoors",
                  "status": {
                    "value": "Live",
                    "data": {
                      "key": "1",
                      "value": "Live"
                    }
                  },
                  "title": "Outdoors",
                  "description": "Outdoor items"
                }
              }
            },
            "stock_level": 50,
            "stock_status": {
              "value": "In Stock",
              "data": {
                "key": "1",
                "value": "In Stock"
              }
            },
            "description": "<p>asdf</p>",
            "requires_shipping": {
              "value": "Yes",
              "data": {
                "key": "1",
                "value": "Yes"
              }
            },
            "weight": 0,
            "height": 0,
            "width": 0,
            "depth": 0,
            "catalog_only": {
              "value": "No",
              "data": {
                "key": "0",
                "value": "No"
              }
            },
            "tax_band": {
              "value": "Default",
              "data": {
                "id": "944589246797185285",
                "title": "Default",
                "description": null,
                "rate": 20,
                "created_at": null,
                "updated_at": null
              }
            },
            "collection": null,
            "brand": null,
            "pricing": {
              "pre_discount": {
                "formatted": {
                  "with_tax": "£30.00",
                  "without_tax": "£25.00",
                  "tax": "£5.00"
                },
                "rounded": {
                  "with_tax": 30,
                  "without_tax": 25,
                  "tax": 5
                },
                "raw": {
                  "with_tax": 30,
                  "without_tax": 25,
                  "tax": 5
                }
              },
              "post_discount": {
                "formatted": {
                  "with_tax": "£30.00",
                  "without_tax": "£25.00",
                  "tax": "£5.00"
                },
                "rounded": {
                  "with_tax": 30,
                  "without_tax": 25,
                  "tax": 5
                },
                "raw": {
                  "with_tax": 30,
                  "without_tax": 25,
                  "tax": 5
                }
              }
            },
            "is_variation": false,
            "modifiers": [],
            "images": [{
              "id": 948220808830910500,
              "name": "survival_manual.jpg",
              "url": {
                "http": "http://commercecdn.com/944589239381656329/b59c7fa9-3ecb-46fb-8f61-9c53fa88696e.jpeg",
                "https": "https://commercecdn.com/944589239381656329/b59c7fa9-3ecb-46fb-8f61-9c53fa88696e.jpeg"
              },
              "segments": {
                "domain": "commercecdn.com/",
                "suffix": "944589239381656329/b59c7fa9-3ecb-46fb-8f61-9c53fa88696e.jpeg"
              }
            }],
            "name": "Survival Manual",
            "tax": 20,
            "total": 30,
            "total_before_tax": 25,
            "totals": {
              "pre_discount": {
                "formatted": {
                  "with_tax": "£30.00",
                  "without_tax": "£25.00"
                },
                "rounded": {
                  "with_tax": 30,
                  "without_tax": 25
                },
                "raw": {
                  "with_tax": 30,
                  "without_tax": 25
                }
              },
              "post_discount": {
                "formatted": {
                  "with_tax": "£30.00",
                  "without_tax": "£25.00"
                },
                "rounded": {
                  "with_tax": 30,
                  "without_tax": 25
                },
                "raw": {
                  "with_tax": 30,
                  "without_tax": 25
                }
              }
            }
          }
        },
        "totals": {
          "pre_discount": {
            "formatted": {
              "with_tax": "£174.00",
              "without_tax": "£145.00"
            },
            "rounded": {
              "with_tax": 174,
              "without_tax": 145
            },
            "raw": {
              "with_tax": 174,
              "without_tax": 145
            }
          },
          "post_discount": {
            "formatted": {
              "with_tax": "£174.00",
              "without_tax": "£145.00"
            },
            "rounded": {
              "with_tax": 174,
              "without_tax": 145
            },
            "raw": {
              "with_tax": 174,
              "without_tax": 145
            }
          }
        }
      },
      "shipping": {
        "required": true,
        "methods": []
      },
      "addresses": [],
      "gateways": []
    };

    var mockAddItemData = {
      "identifier": "55fe70bbbe446a930d0e413a55c185be",
      "id": "948220372480688917",
      "quantity": 2,
      "order": null,
      "created_at": "2015-03-25 04:11:27",
      "updated_at": "2015-03-25 04:11:36",
      "sku": "5010",
      "title": "Sun Hat",
      "slug": "sun-hat",
      "price": 30,
      "sale_price": 0,
      "status": {
        "value": "Live",
        "data": {
          "key": "1",
          "value": "Live"
        }
      },
      "category": {
        "value": "Clothing, Outdoors",
        "data": {
          "947196031748014607": {
            "id": "947196031748014607",
            "order": null,
            "created_at": "2015-03-23 18:16:17",
            "updated_at": "2015-03-25 01:44:32",
            "parent": null,
            "slug": "clothing",
            "status": {
              "value": "Live",
              "data": {
                "key": "1",
                "value": "Live"
              }
            },
            "title": "Clothing",
            "description": "<p>Clothing Items</p>"
          },
          "944589239574593732": {
            "id": "944589239574593732",
            "order": null,
            "created_at": "2015-03-20 03:57:06",
            "updated_at": "2015-03-25 01:44:32",
            "parent": null,
            "slug": "outdoors",
            "status": {
              "value": "Live",
              "data": {
                "key": "1",
                "value": "Live"
              }
            },
            "title": "Outdoors",
            "description": "Outdoor items"
          }
        }
      },
      "stock_level": 200,
      "stock_status": {
        "value": "In Stock",
        "data": {
          "key": "1",
          "value": "In Stock"
        }
      },
      "description": "<p>asdf</p>",
      "requires_shipping": {
        "value": "Yes",
        "data": {
          "key": "1",
          "value": "Yes"
        }
      },
      "weight": 0,
      "height": 0,
      "width": 0,
      "depth": 0,
      "catalog_only": {
        "value": "No",
        "data": {
          "key": "0",
          "value": "No"
        }
      },
      "tax_band": {
        "value": "Default",
        "data": {
          "id": "944589246797185285",
          "title": "Default",
          "description": null,
          "rate": 20,
          "created_at": null,
          "updated_at": null
        }
      },
      "collection": null,
      "brand": null,
      "pricing": {
        "formatted": {
          "with_tax": "£36.00",
          "without_tax": "£30.00",
          "tax": "£6.00"
        },
        "rounded": {
          "with_tax": 36,
          "without_tax": 30,
          "tax": 6
        },
        "raw": {
          "with_tax": 36,
          "without_tax": 30,
          "tax": 6
        }
      },
      "is_variation": false,
      "modifiers": [],
      "images": [{
        "id": 948220432266297300,
        "name": "sun_hat.jpg",
        "url": {
          "http": "http://commercecdn.com/944589239381656329/4cd08d2b-3f86-4746-b5ab-e24ec5f0c533.jpeg",
          "https": "https://commercecdn.com/944589239381656329/4cd08d2b-3f86-4746-b5ab-e24ec5f0c533.jpeg"
        },
        "segments": {
          "domain": "commercecdn.com/",
          "suffix": "944589239381656329/4cd08d2b-3f86-4746-b5ab-e24ec5f0c533.jpeg"
        }
      }],
      "name": "Sun Hat",
      "tax": 20,
      "total": 72,
      "total_before_tax": 60,
      "totals": {
        "formatted": {
          "with_tax": "£72.00",
          "without_tax": "£60.00",
          "tax": "£12.00"
        },
        "rounded": {
          "with_tax": 72,
          "without_tax": 60,
          "tax": 12
        },
        "raw": {
          "with_tax": 72,
          "without_tax": 60,
          "tax": 12
        }
      }
    };
    var mockDepartmentData = [{
      "id": "947197186423128594",
      "order": null,
      "created_at": "2015-03-23 18:18:35",
      "updated_at": "2015-03-25 01:44:32",
      "parent": null,
      "slug": "books",
      "status": {
        "value": "Live",
        "data": {
          "key": "1",
          "value": "Live"
        }
      },
      "title": "Books",
      "description": "<p>Books and reading materials</p>",
      "images": []
    }];

    // var mockRouteId = 947197186423128594;

    return function() {
      $provide.value('MoltinAuth', {
        Cart: {
          Contents: function(cb) {
            return cb(mockCartData);
          },
          Insert: function(id, qu, mod, cb) {
            return cb(mockAddItemData);
          },
          Checkout: function(cb) {
            return cb(mockCheckoutData);
          }
        },
        Product: {
          Search: function(mockRouteId, cb) {
            return cb(mockProductData);
          },
          List: function(mod, cb) {
            return cb(mockProductData);
          }
        },
        Category: {
          List: function(mod, cb) {
            return cb(mockProductData);
          }
        }
      });
    };
  }]);
