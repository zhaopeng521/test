import directive  from './loading_wrap.directive';


export default
angular.module('telecom')
       .directive('uiLoadingWrap', directive.factory);
       