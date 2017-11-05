/**
 * 创建应用
 */
let app = angular.module('telecom', [
    'pasp.ui'
]);

/**
 * 模块加载
 */
var componentModules = require.context('./components/', true, /\.index.js$/);
componentModules.keys().forEach(componentModules);

/**
 * 页面加载
 */
var pageModules = require.context('./pages/', true, /\.index.js$/);
pageModules.keys().forEach(pageModules);

/**
 * 页面加载
 */
var services = require.context('./service/', true, /\.index.js$/);
services.keys().forEach(services);

//var colResize = require('colresizable');

app.run(['$rootScope', '$location', '$stateParams', function($rootScope, $location, $stateParams) {
    $rootScope.$watch(function() {
        return $location.path();
    }, function() {
        $rootScope.stateParams = $stateParams;
        // setTimeout(() => {
        //     $('table').colResizable({
        //         fixed: false,
        //         liveDrag: true,
        //         gripInnerHtml: "<div class='grip2'></div>",
        //         draggingClass: "dragging"
        //     })
        // }, 0)
    });

}]);

export default app;