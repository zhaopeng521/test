// import controller  from './device.controller';
// import templateUrl from './device.view.html';

// export default
// angular.module('telecom')
//        .config(($stateProvider, $urlRouterProvider) => {
//            "ngInject";

//            // 添加页面路由
//            $stateProvider.state('device', {
//                url: '/device',
//                controller: controller,
//                controllerAs: 'vm',
//                templateUrl: templateUrl,
//                reloadOnSearch: false
//            });
//        });
import directive   from './device.directive';

export default
angular.module('telecom')
       .directive('uiDevice', directive.factory)