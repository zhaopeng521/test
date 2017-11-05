class Controller {
    constructor(demoRequest, $state, $scope,$filter) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.$filter = $filter;
        this.demoRequest = demoRequest;
        this.num = "";
        this.start_date = '';
        this.end_date = '';
        this.scp = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.init();
    }
    init() {
        this.scp = {
            loading: false,
            list: 0,
            result: '',
            msg: ""
        };
        this.table = null;
    }
    submitTable() {
        this.init();
        let pramas = {
            acc_nbr: this.num,
            start_time:this.$filter('date')(this.start_date,'yyyyMMdd'),
            end_time :this.$filter('date')(this.end_date,'yyyyMMdd')
        };
        console.log(pramas);
        this.scp.loading = true;
        if (!this.num) {
            return this.scp = {
                loading: false,
                msg: "请输入查询的号码",
                result: 201
            }
        }
        this.demoRequest.payment(pramas).then(data => {
            this.scp.loading = false;
            console.log(data,"12323");
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Payment-Record-info"];
                this.scp.result = 0;
                console.log(this.table.length);
                this.scp.list = this.table.length;
                console.log(this.scp, "000");
            } else {
                // console.log(this.scp,"111");
                this.scp.result = 201;
                this.table = null;
                this.scp.msg = data["CCA"]["Para-Field-Result"];
            };

        }, error => {
            this.scp.result = 500;
            this.scp.loading = false;
        })
    }

}

export default Controller;