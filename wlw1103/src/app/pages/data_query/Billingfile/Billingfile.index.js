import controller  from './Billingfile.controller';
import templateUrl from './template.view.html';

angular.module('telecom')
       .config(($stateProvider, $urlRouterProvider) => {
           "ngInject";

           // 添加页面路由
           $stateProvider.state('Billingfile', {
               url: '/Billingfile',
               controller: controller,
               controllerAs: 'vm',
               templateUrl: templateUrl,
               reloadOnSearch: false
           });
       });