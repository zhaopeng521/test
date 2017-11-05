var templateUrl = require('./loading_wrap.view.html');

class Directive {
    constructor() {
        return {
            replace: true,
            scope: {
                list: '=',
                loading: '=',
                result: '=',
                message:'='
            },
            templateUrl: templateUrl
        };
    }

    static factory() {
        return new Directive();
    }
}

export default Directive;