  SystemJS.config({
    paths: {
      'npm:': 'node_modules',
      //'app': 'dist'
    },
    map: {
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      'jquery': 'npm:jquery/dist/jquery.min.js',

      'rxjs': 'npm:rxjs'
    },
    packages: {
      rxjs: {
        defaultExtension: 'js'
      }
    }
  })
