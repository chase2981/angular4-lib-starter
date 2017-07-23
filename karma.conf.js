module.exports = function(config) {
  config.set({
    basePath: __dirname,
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],

    // // Proxied base paths for loading assets
    // proxies: {
    //   // required for modules fetched by SystemJS
    //   '/base/src/node_modules/': '/base/node_modules/'
    // },

    files: [
      {pattern: 'node_modules/core-js/client/core.js', included: true, watched: false},
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/proxy.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/sync-test.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/jasmine-patch.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/fake-async-test.js', included: true, watched: false},
      {pattern: 'node_modules/hammerjs/hammer.min.js', included: true, watched: false},
      {pattern: 'node_modules/hammerjs/hammer.min.js.map', included: false, watched: false},

      // Include all Angular dependencies
      {pattern: 'node_modules/@angular/**/*', included: false, watched: false},
      {pattern: 'node_modules/rxjs/**/*', included: false, watched: false},

      {pattern: 'test/karma-test-shim.js', included: true, watched: false},

      // 'build/systemjs.config.js',
      'build/browser-test-shim.js',

      //'build/**/*.+(js|js.map|css|html)',

      // Includes all package tests and source files into karma. Those files will be watched.
      // This pattern also matches all all sourcemap files and TypeScript files for debugging.
      {pattern: 'build/**/*', included: false, watched: true},
      {pattern: 'src/**', included: false, watched: true}
    ],

    reporters: ['progress', 'kjhtml'],

    customLaunchers: {
      "Chrome_1024x768": {
        "base": "Chrome",
        "flags": [
          "--window-size=1024,768"
        ]
      }
    },

    exclude: [],
    preprocessors: {},
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome_1024x768'],
    singleRun: false
  });
};
