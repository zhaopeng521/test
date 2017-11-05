class Controller {
    constructor(HomeService) {
        "ngInject";
        
        this.HomeService = HomeService;

        this._init();
    }

    /**
     * 初始化
     */
    _init() {
        console.log("home inited...");
    }

    dd() {
        $("#fff")[0].contentWindow.postMessage('http://www.baidu.com','http://localhost:8080');
    }

}

export default Controller;