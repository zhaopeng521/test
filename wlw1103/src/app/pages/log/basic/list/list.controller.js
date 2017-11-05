class Controller {
    constructor($state, $location, LogBasicAppListService, $stateParams, $modal, uiAlert) {
        "ngInject";

        this.$state = $state;
        this.$location = $location;
        this.LogBasicAppListService = LogBasicAppListService;
        this.$modal = $modal;
        this.uiAlert = uiAlert;
        this.$stateParams = $stateParams;

        this._init();

    }
    
    _init() {
        console.log("log page inited...")
    }
}

export default Controller;
