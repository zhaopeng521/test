class Service {
    constructor(QueryHelperService) {
        "ngInject"

        this.QueryHelperService = QueryHelperService;
    }

    /**
     * 数据请求 demo
     * @param  id
     */
    getDataVolume(params) {
        return this.QueryHelperService.get('/main/demo', {
            id: params.id
        });
    };


}

export default Service;