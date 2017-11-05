class Service {
    constructor($http, $q, uiNotification, $rootScope, $state, uiAlert, $timeout) {
        "ngInject"

        this._$http = $http;
        this._$q = $q;
        this._$rootScope = $rootScope;
        this._$state = $state;
        this._uiNotification = uiNotification;
        this._uiAlert = uiAlert;
        this._$timeout = $timeout;
    }
    
    get(url, params) {
        return this._requst('get', ...arguments);
    }

    post(url, data, config) {
        return this._requst('post', ...arguments);
    }

    delete(url, params) {
        return this._requst('delete', ...arguments);
    }

    put(url, data, config) {
        return this._requst('put', ...arguments);
    }

    _requst(method, url, data, config) {
        const deferred = this._$q.defer();
        let request;
        url = env === 'dev' ? "/ctg-diting" + url : url;
        if(method === 'get' || method === 'delete') {
            request = this._$http[method](url, { params: data });
        } else {
            request = this._$http[method](url, data, config);  
        }
        request.success(data => {
            deferred.resolve(data);
        }).error(data => {
            deferred.reject(data);
        });

        return deferred.promise;
    }
}

export default Service;
