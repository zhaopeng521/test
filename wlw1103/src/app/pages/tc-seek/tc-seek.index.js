import controller  from './tc-seek.controller';
import templateUrl from './tc-seek.view.html';

export default
angular.module('telecom')
       .config(($stateProvider, $urlRouterProvider) => {
           "ngInject";

           // 添加页面路由
           $stateProvider.state('tc_seek', {
               url: '/tc_seek',
               controller: controller,
               controllerAs: 'vm',
               templateUrl: templateUrl,
               reloadOnSearch: false
           });
       });