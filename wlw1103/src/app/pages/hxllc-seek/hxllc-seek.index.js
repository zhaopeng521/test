import controller  from './hxllc-seek.controller';
import templateUrl from './hxllc-seek.view.html';

export default
angular.module('telecom')
       .config(($stateProvider, $urlRouterProvider) => {
           "ngInject";

           // 添加页面路由
           $stateProvider.state('hlc_seek', {
               url: '/hlc_seek',
               controller: controller,
               controllerAs: 'vm',
               templateUrl: templateUrl,
               reloadOnSearch: false
           });
       });