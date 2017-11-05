import directive   from './sidebar.directive';

export default
angular.module('telecom')
       .directive('uiSidebar', directive.factory)