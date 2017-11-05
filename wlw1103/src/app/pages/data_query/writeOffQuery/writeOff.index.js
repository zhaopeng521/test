import controller  from './writeOff.controller';
import templateUrl from './template.view.html';

angular.module('telecom')
       .config(($stateProvider, $urlRouterProvider) => {
           "ngInject";

           // 添加页面路由
           $stateProvider.state('work/writeOff', {
               url: '/work/writeOff',
               controller: controller,
               controllerAs: 'vm',
               templateUrl: templateUrl,
               reloadOnSearch: false
           });
       });