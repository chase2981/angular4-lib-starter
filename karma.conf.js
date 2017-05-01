// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
'use strict';

var argv = require('yargs').argv;
var minimatch = require("minimatch");

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      //require('karma-phantomjs-launcher')
      //require('karma-coverage-istanbul-reporter')
    ],
    files: [
      { pattern: 'src/polyfills.ts', watched: false },
      { pattern: 'src/test.ts', watched: false }
    ],
    preprocessors: {
      '**/*.ts': ['webpack', 'sourcemap']
    },
    webpack: require('./webpack-spec.config')({ env: 'test' }),
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,

    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // Passing command line arguments to tests
    client: {
      files: argv.files ? minimatch.makeRe(argv.files).source : null,
      clearContext: false
    }
  });

  if (process.env.TRAVIS || process.env.CIRCLECI) {
    config.browsers = ['Chrome_travis_ci'];
    config.singleRun = true;
    config.browserNoActivityTimeout = 20000;
  }
}
