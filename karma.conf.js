'use strict';

// Karma configuration
// Generated on Thu Apr 02 2015 17:29:57 GMT-0700 (MST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './app/bower_components/angular/angular.min.js',
      './app/bower_components/angular-mocks/angular-mocks.js',
      './app/bower_components/angular-animate/*.min.js',
      './app/bower_components/angular-route/*.min.js',
      './app/bower_components/moltin/*.min.js',
      './app/scripts/*.js',
      './app/controllers/*.js',
      './app/services/*.js',
      './app/directives/*.js',
      './app/**/*Spec.js',
      './app/directives/*.html'
    ],


    // list of files to exclude
    exclude: [],


    preprocessors: {
      '**/*.html': 'html2js'
    },

    ngHtml2JsPreprocessor: {
      // strip app from the file path
      stripPrefix: 'app/directives/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
