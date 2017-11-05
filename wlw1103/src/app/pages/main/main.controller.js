import { menu, data } from './main.model';
import style from './main.scss';
class Controller {
    constructor($timeout, $sce, $scope) {
        "ngInject";

        // 绑定依赖
        this.$sce = $sce;
        this.$timeout = $timeout;

        // 绑定数据模型
        this.menu = angular.copy(menu);
        this.menuTree = angular.copy(data);

        // 绑定样式
        this.style = style;

        this.tabs = [];
        this.activeTab;
        this._init();
    }

    /**
     * 收起导航
     */
    toggleNavBtn() {
        this.menu.collapsed = !this.menu.collapsed;
    }

    /**
     * 添加tab
     */
    addTab(tab) {
        let _tab = angular.copy(tab);
        let hasTab = _.find(this.tabs, item => {
            return item.name == _tab.name;
        })
        if(!hasTab) {
            _tab.link = this._trustAsResourceUrl(_tab.link);
            this.tabs.push(_tab);
        }
        this.activeTab = _tab;
        this.resizeTab();
    }

    switchTab(tab) {
        this.activeTab = tab;
    }

    closeTab(tab) {
        const index = this.tabs.indexOf(tab);
        this.tabs.splice(index, 1);
        if(tab === this.activeTab) {
            this.activeTab = this.tabs[index - 1];
        }

        this.resizeTab();
    }

    resizeTab() {
        this.$timeout(() => {
            let wrapWidth = $('#frameTabs').width();
            let tabsWidth = $('#frameTabs ul').width();
            let offset = wrapWidth - tabsWidth;
            if(offset < 0) {
                this.overflow = true;
            } else {
                this.overflow = false;
            }
        }, 0);
    }

    moveRight() {
        let tabs = $('#frameTabs ul');
        let wrapWidth = $('#frameTabs').width();
        let tabsWidth = tabs.width();

        
        let left = tabs.position().left - 20;
        tabs.css({left: left});
    }

    moveLeft() {
        let tabs = $('#frameTabs ul');
        let wrapWidth = $('#frameTabs').width();
        let tabsWidth = tabs.width();

        let left = tabs.position().left + 20;
        if(left > 0) {
            return;
        }
        tabs.css({left: left});
    }

    onOpenTab(tab) {
        this.addTab(tab);
    }

    clickContextMenu(item, tab) {
        switch(item.action) {
            case 'all':
                this.tabs = [];
                this.resizeTab();
                break;
            case 'current':
                this.closeTab(tab);
                break;
            case 'other':
                this.tabs = [tab];
                this.activeTab = tab;
                break;
        }
    }
   
    /**
     * 获取菜单
     */
    _getMenu() {
        this.links = this.menuTree.data.records;
    }

    /**
     * 初始化
     */
    _init() {
        this._getMenu();

        this.addTab({
            name: '公告',
            link: '#/home'
        });

        this.menu = [{
            label: '关闭所有窗口',
            action: 'all'
        }, {
            label: '关闭其它窗口',
            action: 'other'
        }, {
            label: '关闭当前窗口',
            action: 'current'
        }];

        this.menuOptions = {
            itemLabel: 'label',
            isMultiple: false
        };

    }

    _trustAsResourceUrl(url) {
        let _url = url.replace('#', '?iframe#');
        return this.$sce.trustAsResourceUrl(_url);
    }
}

export default Controller;
