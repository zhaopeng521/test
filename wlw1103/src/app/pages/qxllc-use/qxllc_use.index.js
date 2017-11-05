import controller  from './qxllc_use.controller';
import templateUrl from './qxllc_use.view.html';

export default
angular.module('telecom')
       .config(($stateProvider, $urlRouterProvider) => {
           "ngInject";

           // 添加页面路由
           $stateProvider.state('qxllc_use', {
               url: '/qxllc_use',
               controller: controller,
               controllerAs: 'vm',
               templateUrl: templateUrl,
               reloadOnSearch: false
           });
       });