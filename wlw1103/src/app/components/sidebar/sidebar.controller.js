import style from './sidebar.scss';

class Controller {
    constructor($scope) {
        "ngInject"

        $scope.sidebarStyle = style;

        $scope.target = "w" + new Date().getTime();

        $scope.$watch('links', (val) => {
            if(val && val.length > 0) {
                val[0].expanded = true;
            }
        });

        $scope.eventCall = link => {
            if(link.windowHref) {
                top.window.location.href = link.url;
            } else {
                if(link.event) {
                    $scope.$root.$broadcast(link.event, link);
                }
            }
        }

        $scope.openTab = link => {
            console.log('================', link)
            $scope.onOpenTab({ tab : link });
        }

        $scope.toggleChildren = link => {
            link.expanded = !link.expanded;
        }
    }
}

export default Controller;
