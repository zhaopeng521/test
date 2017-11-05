import controller  from './writeoff.controller';
import templateUrl from './writeoff.view.html';

export default
angular.module('telecom')
       .config(($stateProvider, $urlRouterProvider) => {
           "ngInject";

           // 添加页面路由
           $stateProvider.state('writeoff', {
               url: '/writeoff',
               controller: controller,
               controllerAs: 'vm',
               templateUrl: templateUrl,
               reloadOnSearch: false
           });
       });