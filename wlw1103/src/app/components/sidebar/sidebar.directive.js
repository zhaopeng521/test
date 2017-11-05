import controller  from './sidebar.controller';
import templateUrl from './sidebar.view.html';

class Directive {
    constructor() {
        return {
            replace: true,
            templateUrl: templateUrl,
            scope: {
                links:'=',
                onOpenTab: '&'
            },
            controller: controller,
            controllerAs: 'vm'
        };
    }

    static factory() {
        return new Directive();
    }
}

export default Directive;