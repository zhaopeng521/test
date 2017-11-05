import controller  from './dwjl_seek.controller';
import templateUrl from './dwjl_seek.view.html';

export default
angular.module('telecom')
       .config(($stateProvider, $urlRouterProvider) => {
           "ngInject";

           // 添加页面路由
           $stateProvider.state('dwjl_seek', {
               url: '/dwjl_seek',
               controller: controller,
               controllerAs: 'vm',
               templateUrl: templateUrl,
               reloadOnSearch: false
           });
       });