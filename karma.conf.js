// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

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
      require('karma-phantomjs-launcher'),
      require('karma-coverage-istanbul-reporter')
    ],
    /* test files */
    files: [
      { pattern: 'src/test.ts', watched: false }
    ],
    preprocessors: {
      '**/*.ts': ['webpack', 'sourcemap']
    },
    /* build files */
    webpack: {
      devtool: 'inline-source-map',
      entry: {
        main: './src/main.ts'
      },
      output: {
        path: './dist',
        filename: '[name].bundle.js'
      },
      resolve: {
        extensions: ['.js', '.ts', '.html']
      },

      module: {
        exprContextCritical: true,

        rules: [{
            test: /\.ts$/,
            loaders: [
              'awesome-typescript-loader?configFileName=tsconfig-spec.json',
              'angular2-template-loader'
            ]
          },
          {
            test: /\.html$/,
            loader: 'raw-loader'
          },
          {
            test: /\.css$/,
            //include: helpers.root('src', 'app'),
            loader: 'raw-loader'
          }
        ]
      }
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    browsers: ['PhantomJS'],
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
      //clearContext: false
    }
  });

  if (process.env.TRAVIS || process.env.CIRCLECI) {
    // config.browsers = ['Chrome_travis_ci'];
    config.singleRun = true;
    config.browserNoActivityTimeout = 20000;
  }
}
