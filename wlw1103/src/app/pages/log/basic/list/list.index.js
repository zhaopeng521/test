import controller  from './list.controller';
import service     from './list.service';
import templateUrl from './list.view.html';

export default
angular.module('telecom')
       .service('LogBasicAppListService', service)
       .config(($stateProvider, $urlRouterProvider) => {
           "ngInject";

           // 添加页面路由
           $stateProvider.state('log/basic/list', {
               url: '/log/basic',
               controller: controller,
               controllerAs: 'vm',
               templateUrl: templateUrl,
               reloadOnSearch: false
           });
       });