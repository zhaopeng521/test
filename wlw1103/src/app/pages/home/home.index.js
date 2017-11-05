import controller from './home.controller';
import service from './home.service';
import templateUrl from './home.view.html';

angular.module('telecom')
	.service('HomeService', service)
	.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    //$urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        controller: controller,
        controllerAs: 'vm',
        templateUrl: templateUrl
    });
});