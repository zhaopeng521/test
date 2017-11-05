1. npm install
2.在终端 gulp serve
3. http://localhost:5000/index.html#/main


10.25
    <script src="./libs/resizable-tables.js"></script>
这个 可以实现table表格进行拖拽缩放；
还有另一种方法是 npm colResizable@1.5
	不能直接 require 直接引进，可以通过webpack 手动引进
	1.config.js 	const BASE_PATH = path.join(__dirname, '../');
	2.webpack.config.js 	resolve: {
								alias: {
											colresizable: config.PATH_NODE_MODULES + '/colresizable/colResizable-1.5.min.js',
										}
							 },
	3. app.config.js  	var colResize = require('colresizable');

						app.run(['$rootScope', '$location', '$stateParams', function($rootScope, $location, $stateParams) {
							$rootScope.$watch(function() {
								return $location.path();
							}, function() {
								$rootScope.stateParams = $stateParams;
								// setTimeout(() => {//加载js代码，实现样式
								//     $('table').colResizable({
								//         fixed: false,
								//         liveDrag: true,
								//         gripInnerHtml: "<div class='grip2'></div>",
								//         draggingClass: "dragging"
								//     })
								// }, 0)
							});

						}]);