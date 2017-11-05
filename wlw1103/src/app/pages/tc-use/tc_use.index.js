import controller  from './tc_use.controller';
import templateUrl from './tc_use.view.html';

export default
angular.module('telecom')
       .config(($stateProvider, $urlRouterProvider) => {
           "ngInject";

           // 添加页面路由
           $stateProvider.state('tc_use', {
               url: '/tc_use',
               controller: controller,
               controllerAs: 'vm',
               templateUrl: templateUrl,
               reloadOnSearch: false
           });
       });