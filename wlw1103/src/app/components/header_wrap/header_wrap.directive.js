import controller from './header_wrap.controller';
import templateUrl from './header_wrap.view.html';

class Directive {
    constructor() {
        return {
            replace: true,
            templateUrl: templateUrl,
            controller: controller,
            controllerAs: 'vm',
            scope: {},
        };
    }

    static factory() {
        return new Directive();
    }
}

export default Directive;