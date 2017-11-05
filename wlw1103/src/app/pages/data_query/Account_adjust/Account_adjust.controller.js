class Controller {
    constructor(demoRequest, $state, $scope) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.demoRequest = demoRequest;
        this.num = "";
        this.pramas = {};
        this.table = {};
        this.total = 0;  
        // this.msg = "消息已成功发送，请稍等";
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
        this.total = 0;
        this.pramas = {
            acc_nbr: this.num,
        };
        this.scp.loading = true;
        if (!this.num) {
            return this.scp = {
                loading: false,
                msg: "请输入查询的号码",
                result: 201
            }
        }
        this.demoRequest.Account_adjust(this.pramas).then(data => {
            this.total = 0;
            this.scp.loading = false;
            console.log(data);
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Adjust-RecQuery-info"];
                this.scp.result = 0;
                this.scp.list = this.table.length;
                for(var i = 0;i < this.table.length;i++){
                    // console.log(this.table[i]["amount"]);
                    this.total += (this.table[i]["amount"] - 0);
                }
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