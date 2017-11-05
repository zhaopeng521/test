class Controller {
    constructor(demoRequest, $state, $scope) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.demoRequest = demoRequest;
        this.scp = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.num = ""; //传入值
        this.pramas = {};
        this.table = [];
        // 分页属性
        this.page = {
            currentPage: 1, // 从地址栏获取当前页码，默认显示第一页
            totalItems: 0, // 总共的条数，初始化可设一个较大的数，避免currentPage超出总页数
            perPage: 10, // 从地址栏获取每一页条数，默认显示10条
        };
        this.getList();
        this.init();
    }
    init(){
        this.scp = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.table = null;
    }
    // 绑定切换分页事件
    changePage(currentPage) {
        this.page.currentPage = currentPage;
        this.pramas.pages = currentPage;
        console.log(this.pramas)
        this.getList();
    }

    // 绑定切换每页数事件
    changePerPage(perPage) {
        this.page.perPage = perPage;
        this.pramas.count = perPage;
        this.getList();
    }
    // 根据分页信息获取数据
    getList() {
        this.pramas = {
            merge_nbr: this.num,
            pages: this.page.currentPage,
            count: this.page.perPage
        };
        console.log(this.pramas);
        this.demoRequest.hz_seek(this.pramas).then((data) => {
            this.scp.loading = false;
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Combine-Account-info"];
                this.page.totalItems = data["CCA"]["TotalCount"];
            };
        });

    }
    submitTable() {
        this.init();
        this.pramas = {
            merge_nbr: this.num,
        };
        this.scp.loading = true;
        if (!this.num) {
            return this.scp = {
                loading: false,
                msg: "请输入查询的号码",
                result: 201
            }
        }
        this.demoRequest.hz_seek(this.pramas).then(data => {
            this.page.totalItems = data["CCA"]["TotalCount"];
            this.scp.loading = false;
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Combine-Account-info"];
                this.scp.list = this.table.length;
                this.scp.result = 0;
            } else {
                this.scp.result = 201;
                this.scp.msg = data["CCA"]["Para-Field-Result"];
            };

        }, error => {
            this.scp.result = 500;
            this.scp.loading = false;
        });
    }

}

export default Controller;