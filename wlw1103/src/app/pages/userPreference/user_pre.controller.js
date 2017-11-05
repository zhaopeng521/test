import style from './user_pre.css';
class Controller {
    constructor(demoRequest, $state, $scope, $timeout, $stateParams) {
        "ngInject";
        this.$timeout = $timeout;
        this.$state = $state;
        this.$scope = $scope;
        this.style = style;
        this.demoRequest = demoRequest;
        this.num = "";
        this.t3 = false; //tab 的active 属性值
        this.t6 = false;
        this.same_value = '省份合帐号码编码';
        this.selected2 = "";
        this.pramas = {};
        this.pramas1 = {};
        this.pramas2 = {};
        this.pramas3 = {};
        this.pramas4 = {};
        this.pramas5 = {};
        this.pramas6 = {};
        this.table = {};
        this.table1 = {};
        this.table2 = {};
        this.table3 = {};
        this.table4 = {};
        this.table5 = {};
        this.table6 = {};
        this.scp = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.scp1 = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.scp2 = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.scp3 = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.scp4 = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.scp5 = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.scp6 = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.tabId = 't-1'; //显示默认的tab卡。
        // 分页属性
        this.page = {
            currentPage: 1, // 从地址栏获取当前页码，默认显示第一页
            totalItems: 0, // 总共的条数，初始化可设一个较大的数，避免currentPage超出总页数
            perPage: 10, // 从地址栏获取每一页条数，默认显示10条
        };
        // 分页属性
        this.page1 = {
            currentPage: 1, // 从地址栏获取当前页码，默认显示第一页
            totalItems: 0, // 总共的条数，初始化可设一个较大的数，避免currentPage超出总页数
            perPage: 10, // 从地址栏获取每一页条数，默认显示10条
        };
        this.page2 = {
            currentPage: 1, // 从地址栏获取当前页码，默认显示第一页
            totalItems: 0, // 总共的条数，初始化可设一个较大的数，避免currentPage超出总页数
            perPage: 10, // 从地址栏获取每一页条数，默认显示10条
        };
        this.page3 = {
            currentPage: 1, // 从地址栏获取当前页码，默认显示第一页
            totalItems: 0, // 总共的条数，初始化可设一个较大的数，避免currentPage超出总页数
            perPage: 10, // 从地址栏获取每一页条数，默认显示10条
        };
        this.page4 = {
            currentPage: 1, // 从地址栏获取当前页码，默认显示第一页
            totalItems: 0, // 总共的条数，初始化可设一个较大的数，避免currentPage超出总页数
            perPage: 10, // 从地址栏获取每一页条数，默认显示10条
        };
        this.page5 = {
            currentPage: 1, // 默认显示第一页
            totalItems: 0, // 总共的条数，初始化可设一个较大的数，避免currentPage超出总页数
            perPage: 10, // 从地址栏获取每一页条数，默认显示10条
        };
        this.page6 = {
            currentPage: 1, // 从地址栏获取当前页码，默认显示第一页
            totalItems: 0, // 总共的条数，初始化可设一个较大的数，避免currentPage超出总页数
            perPage: 10, // 默认显示10条
        };
        this.getList();
        this.getList1();
        this.getList4();
        this.getList6();
        this.init();
    }
    init() {
        this.scp = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.t3 = false;
        this.t6 = false;
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
        console.log(this.pramas);
        this.getList();
    }
    // 绑定切换分页事件
    changePage1(currentPage) {
        this.page1.currentPage = currentPage;
        this.pramas1.pages = currentPage;
        console.log("数据", this.pramas1);
        this.getList1();
    }

    // 绑定切换每页数事件
    changePerPage1(perPage) {
        this.page1.perPage = perPage;
        this.pramas1.count = perPage;
        this.getList1();
    }
    // 绑定切换分页事件
    changePage4(currentPage) {
        this.page4.currentPage = currentPage;
        this.pramas4.pages = currentPage;
        this.getList4();
        console.log(currentPage);
    }

    // 绑定切换每页数事件
    changePerPage4(perPage) {
        this.page4.perPage = perPage;
        this.pramas4.count = perPage;
        this.getList4();
    }
    // 绑定切换分页事件
    changePage6(currentPage) {
        this.page6.currentPage = currentPage;
        this.pramas6.pages = currentPage;
        this.getList6();
    }

    // 绑定切换每页数事件
    changePerPage6(perPage) {
        this.page6.perPage = perPage;
        this.pramas6.count = perPage;
        this.getList6();
    }

    // 根据分页信息获取数据
    getList() {
        this.pramas = {
            destination_id: this.num,
            query_flag: this.selected,
            pages: this.page.currentPage,
            count: this.page.perPage
        };
        this.demoRequest.query_seek(this.pramas).then((data) => {
            this.scp.loading = false;
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Data-Information"];
                this.page.totalItems = data["CCA"]["TotalCount"];
            };
        });

    }
    getList1() {
        this.demoRequest.qx_cy(this.pramas1).then((data) => {
            this.scp1.loading = false;
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table1 = data["CCA"]["Service_Information"][0]["Data-Information"];
                this.page1.totalItems = data["CCA"]["TotalCount"];
            };
        });
    }
    getList4() {
        this.scp4.loading = false;
        this.demoRequest.hx_cy(this.pramas4).then((data) => {
            console.log(this.pramas4);
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table4 = data["CCA"]["Data-Information"];
                this.page4.totalItems = data["CCA"]["TotalCount"];
            };
        });
    }
    getList6() {
        this.scp6.loading = false;
        this.demoRequest.goMergeNbr(this.pramas6).then((data) => {
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table6 = data["CCA"]["Combine-Account-info"];
                this.page6.totalItems = data["CCA"]["TotalCount"];
            };
        });
    }
    submitTable() {
        this.init();
        this.pramas = {
            destination_id: this.num,
            query_flag: this.selected,
            pages: this.page.currentPage,
            count: this.page.perPage
        };
        this.scp.loading = true;
        if (!this.num) {
            this.table={}
            this.table1={}
            this.table2={}
            this.table3={}
            this.table4={}
            this.table5={}
            this.table6={}
            return this.scp = {
                loading: false,
                msg: "请输入查询的号码",
                result: 201
            }
        }
        this.demoRequest.query_seek(this.pramas).then(data => {
            this.page.totalItems = data["CCA"]["TotalCount"];
            this.scp.loading = false;
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Data-Information"];
                // this.scp.result = 0;
                // this.scp.list = this.table.length;
                console.log('scp', this.scp);
            } else {
                this.scp.result = 201;
                this.scp.msg = data["CCA"]["Para-Field-Result"];
                console.log('scp', this.scp);
                this.table1={}
                this.table2={}
                this.table3={}
                this.table4={}
                this.table5={}
                this.table6={}
            };
        }, error => {
            this.scp.result = 500;
            this.scp.loading = false;
        });
    }
    seek(e) { //用户资料点击查询详情
        let target = e.currentTarget;
        this.pramas1 = {
            serv_id: target.children[2].innerHTML,
            pages: this.page4.currentPage,
            count: this.page4.perPage
        };
        this.scp1.loading = true;
        this.demoRequest.qx_cy(this.pramas1).then(data => { //前向成员查询
            this.scp1.loading = false;
            console.log(data);
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table1 = data["CCA"]["Service_Information"][0]["Data-Information"] || [];
                this.scp1.result = 0;
                this.scp1.list = this.table1.length;
            } else {
                this.table1 = {};
                this.scp1.result = 201;
                this.scp1.msg = data["CCA"]["Para-Field-Result"];
                this.page1.totalItems = data["CCA"]["TotalCount"] ? data["CCA"]["TotalCount"] : 0;
            };

        }, error => {
            this.scp1.result = 500;
            this.scp1.loading = false;
        });
        this.pramas2 = {
            acc_nbr: target.children[1].innerHTML,
            serv_id: target.children[2].innerHTML,
            cust_id: target.children[9].innerHTML
        };
        this.demoRequest.queryProductInfo(this.pramas2).then(data => { //用户附属产品查询
            console.log(2);
            this.scp2.loading = false;
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table2 = data["CCA"]["Data-Information"] || [];
                this.scp2.result = 0;
                this.scp2.list = this.table2.length;
                this.page2.totalItems = data["CCA"]["TotalCount"] ? data["CCA"]["TotalCount"] : this.table2.length;
            } else {
                this.scp2.result = 201;
                this.scp2.msg = data["CCA"]["Para-Field-Result"];
                this.page2.totalItems = data["CCA"]["TotalCount"] ? data["CCA"]["TotalCount"] : 0;
            };

        }, error => {
            this.table2 = [];
            this.scp2.result = 500;
            this.scp2.loading = false;
        });
        this.pramas4 = {
            acc_nbr: target.children[1].innerHTML,
            serv_id: target.children[2].innerHTML,
            cust_id: target.children[9].innerHTML,
            pages: this.page4.currentPage,
            count: this.page4.perPage
        };
        console.log(this.pramas4, "4");
        this.demoRequest.hx_cy(this.pramas4).then(data => { //后向流量池成员查询
            console.log(3);
            this.scp4.loading = false;
            // this.page4.totalItems = data["CCA"]["TotalCount"];
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table4 = data["CCA"]["Data-Information"] || [];
                this.scp4.result = 0;
                this.page4.totalItems = data["CCA"]["TotalCount"] ? data["CCA"]["TotalCount"] : this.table4.length;;
            } else {
                this.table4 = {};
                this.scp4.result = 201;
                this.scp4.msg = data["CCA"]["Para-Field-Result"];
                this.page4.totalItems = data["CCA"]["TotalCount"] ? data["CCA"]["TotalCount"] : 0;
            };

        }, error => {
            this.scp4.result = 500;
            this.scp4.loading = false;
        });
        this.pramas5 = {
            acc_nbr: target.children[1].innerHTML,
            serv_id: target.children[2].innerHTML,
            cust_id: target.children[9].innerHTML
        };
        this.demoRequest.queryServAttr(this.pramas5).then(data => { //用户属性查询
            this.scp5.loading = false;
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table5 = data["CCA"]["Combine-Account-info"] || [];
                this.scp5.result = 0;
                this.scp5.list = this.table5.length;
                this.page5.totalItems = data["CCA"]["TotalCount"] ? data["CCA"]["TotalCount"] : this.table5.length;
            } else {
                this.table5 = [];
                this.scp5.result = 201;
                this.scp5.msg = data["CCA"]["Para-Field-Result"];
                this.page5.totalItems = data["CCA"]["TotalCount"] ? data["CCA"]["TotalCount"] : 0;
            };

        }, error => {
            this.scp5.result = 500;
            this.scp5.loading = false;
        });
    }
    goAttrInfo(e) {
        this.init();
        let target = e.currentTarget;
        console.log("target:",target);
        this.pramas3 = {
            acc_nbr: target.children[1].innerHTML,
            serv_id: target.children[2].innerHTML,
            cust_id: target.children[9].innerHTML,
            serv_product_id: target.children[8].innerHTML
        };
        console.log(this.pramas3);
        this.demoRequest.goAttrInfo(this.pramas3).then(data => { //用户属性查询
            console.log(data);
            this.scp3.loading = false;
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table3 = data["CCA"]["Data-Information"];
                console.log(this.table3);
                this.scp3.result = 0;
                this.scp3.list = this.table3.length;
                console.log("length", this.scp3.list);
                if (this.scp3.list != 0) {
                    this.t3 = true;
                }
            } else {
                this.scp3.result = 201;
                this.scp3.msg = data["CCA"]["Para-Field-Result"];
            };

        }, error => {
            this.scp3.result = 500;
            this.scp3.loading = false;
        });
    }
    goMergeNbr(e) {
        this.init();
        let target = e.currentTarget;
        this.pramas6 = {
            merge_nbr: target.children[4].innerHTML,
            pages: this.page6.currentPage,
            count: this.page6.perPage
        };
        let attr = target.children[3].innerHTML;
        if (attr == '省份合帐号码编码') {
            this.t6 = true;
            this.scp6.loading = true;
            this.demoRequest.goMergeNbr(this.pramas6).then(data => { //用户属性查询
                this.page6.totalItems = data["CCA"]["TotalCount"];
                console.log(data);
                this.scp6.loading = false;
                if (data["CCA"]["Service-Result-Code"] == 0) {
                    this.table6 = data["CCA"]["Combine-Account-info"];
                    this.scp6.result = 0;
                    this.scp6.list = this.table6.length;
                } else {
                    this.scp6.result = 201;
                    this.scp6.msg = data["CCA"]["Para-Field-Result"];
                };

            }, error => {
                this.scp6.loading = false;
                this.scp6.result = 500;
            });
        }


    }
}

export default Controller;