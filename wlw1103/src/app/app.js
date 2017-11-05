window.$ = angular.element;

import app from './app.config';

require('../assets/styles/style.scss');

angular.bootstrap(document.body, [app.name]);