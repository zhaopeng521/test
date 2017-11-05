class Controller {
    constructor(demoRequest, $state, $scope) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.demoRequest = demoRequest;
        this.num = "";
        this.bl = false;
        this.selected = "";
        this.pramas = {};
        this.table = {};
        this.userTotal = 0;//可用余额
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
        this.userTotal = 0;
        let pramas = {
            "destination_id": this.num,
            area_code:'020',
            query_flag: this.selected,
            mvno_id:'500000001'
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
        this.demoRequest.QueryBalance(pramas).then(data => {
            this.scp.loading = false;
            // this.userTotal = 0;
            console.log(data);
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Balance-Information"]['Balance-Item-Detail'];
                // console.log("shuju",this.table)  balance_available
                this.scp.result = 0;
                this.scp.list = this.table.length;
                // console.log("数据",this.table[0]['balance_available']);
                for(let i = 0;i<this.table.length;i++){
                    this.userTotal += (this.table[i]['balance_available']-0);
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