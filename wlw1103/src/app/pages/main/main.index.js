import controller  from './main.controller';
import templateUrl from './main.view.html';

export default
angular.module('telecom')
       .config(($stateProvider, $urlRouterProvider) => {
           "ngInject";
           $urlRouterProvider.otherwise('/main');
           // 添加页面路由
           $stateProvider.state('main', {
               url: '/main',
               controller: controller,
               controllerAs: 'vm',
               templateUrl: templateUrl,
               reloadOnSearch: false
           });
       });