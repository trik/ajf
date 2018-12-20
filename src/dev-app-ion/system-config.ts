/**
 * @license
 * Copyright (C) 2018 Gnucoop soc. coop.
 *
 * This file is part of the Advanced JSON forms (ajf).
 *
 * Advanced JSON forms (ajf) is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * Advanced JSON forms (ajf) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
 * General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Advanced JSON forms (ajf).
 * If not, see http://www.gnu.org/licenses/.
 *
 */

/** Type declaration for ambient System. */
declare const System: any;

// Configure the base path and map the different node packages.
System.config({
  paths: {
    'node:*': 'node_modules/*'
  },
  map: {
    'plugin-babel': 'node:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node:systemjs-plugin-babel/systemjs-babel-browser.js',
    'text': 'node:systemjs-plugin-text/text.js',

    'rxjs': 'node:rxjs',
    'main': 'main.js',
    'tslib': 'node:tslib/tslib.js',
    'date-fns': 'node:date-fns/index.js',
    'url-parse': 'node:url-parse/dist/url-parse.min.js',

    // Angular specific mappings.
    '@angular/core': 'node:@angular/core/bundles/core.umd.js',
    '@angular/common': 'node:@angular/common/bundles/common.umd.js',
    '@angular/common/http': 'node:@angular/common/bundles/common-http.umd.js',
    '@angular/compiler': 'node:@angular/compiler/bundles/compiler.umd.js',
    '@angular/forms': 'node:@angular/forms/bundles/forms.umd.js',
    '@angular/animations': 'node:@angular/animations/bundles/animations.umd.js',
    '@angular/elements': 'node:@angular/elements/bundles/elements.umd.js',
    '@angular/router': 'node:@angular/router/bundles/router.umd.js',
    '@angular/animations/browser': 'node:@angular/animations/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations':
      'node:@angular/platform-browser/bundles/platform-browser-animations.umd',
    '@angular/platform-browser':
      'node:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic':
      'node:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    '@ionic/core': 'node:@ionic/core',
    '@ionic/core/dist/ionic/svg': 'empty',
    '@ionic/core/loader': 'node:@ionic/core/loader',
    '@ionic/angular': 'node:@ionic/angular',
    '@ionic/angular/dist/directives': 'node:@ionic/angular/dist/directives',
    '@ionic/angular/dist/providers': 'node:@ionic/angular/dist/providers',
    'ionicons': 'node:ionicons',

    '@ngx-translate/core': 'node:@ngx-translate/core/bundles/ngx-translate-core.umd.js',
    '@ngx-translate/http-loader':
      'node:@ngx-translate/http-loader/bundles/ngx-translate-http-loader.umd.js',

    '@ajf/core': 'dist/packages/core/index.js',
    '@ajf/ionic': 'dist/packages/ionic/index.js',
    '@ajf/ionic-examples': 'dist/packages/ionic-examples/index.js',

    '@ajf/core/calendar': 'dist/packages/core/calendar/index.js',
    '@ajf/core/checkbox-group': 'dist/packages/core/checkbox-group/index.js',
    '@ajf/core/image': 'dist/packages/core/image/index.js',
    '@ajf/core/utils': 'dist/packages/core/utils/index.js',
    '@ajf/ionic/calendar': 'dist/packages/ionic/calendar/index.js',
    '@ajf/ionic/checkbox-group': 'dist/packages/ionic/checkbox-group/index.js',
    '@ajf/ionic/image': 'dist/packages/ionic/image/index.js',
  },
  packages: {
    // Thirdparty barrels.
    'rxjs': {main: 'index'},
    'rxjs/operators': {main: 'index'},
    '@ionic/core': {main: 'dist/esm/es5/index'},
    '@ionic/core/loader': {main: 'index'},
    '@ionic/angular': {main: 'dist/index'},
    '@ionic/angular/dist/directives': {main: 'index'},
    '@ionic/angular/dist/providers': {main: 'index'},
    'ionicons': {main: 'dist/esm/index'},
    'ionicons/icons': {main: 'index'},
    'ionicons/dist/ionicons/svg': {
      meta: {
        '*.svg': {
          defaultExtension: 'svg',
          loader: 'text'
        }
      }
    },

    // Set the default extension for the root package, because otherwise the dev-app-map can't
    // be built within the production mode. Due to missing file extensions.
    '.': {
      defaultExtension: 'js'
    }
  },
  transpiler: 'plugin-babel'
});
