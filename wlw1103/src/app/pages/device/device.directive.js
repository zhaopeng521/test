import controller  from './device.controller';
import templateUrl from './device.view.html';

class Directive {
    constructor() {
        return {
            replace: true,
            templateUrl: templateUrl,
            controller: controller,
            controllerAs: 'vm'
        };
    }

    static factory() {
        return new Directive();
    }
}

export default Directive;

