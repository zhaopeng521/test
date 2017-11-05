class Controller {
    constructor(demoRequest, $state, $scope,$filter) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.$filter = $filter;
        this.demoRequest = demoRequest;
        this.num = "";
        this.selected2 = "";
        this.pramas = {};
        this.table = {};
        // this.msg = "消息已成功发送，请稍等";
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
        // this.num = '1064911137708';
        this.pramas = {
            acc_nbr: this.num,
            // start_time:20160305,
            // end_time:20171026,
            start_time:this.$filter('date')(this.start_date,'yyyyMMdd'),
            end_time :this.$filter('date')(this.end_date,'yyyyMMdd')
        };
        this.scp.loading = true;
        if (!this.num) {
            return this.scp = {
                loading: false,
                msg: "请输入查询的号码",
                result: 201
            }
        }
        if(!this.start_date || !this.end_date){
            return this.scp = {
                loading:false,
                msg:"请输入查询的日期",
                result:201
            }
        }
        console.log("this.pramas:",this.pramas);
        this.demoRequest.BalanceChange(this.pramas).then(data => {
            this.scp.loading = false;
            console.log(data);
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Balance-Record-info"];
                this.scp.result = 0;
                // console.log(this.table.length);
                this.scp.list = this.table.length;
                // console.log(this.scp, "000");
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