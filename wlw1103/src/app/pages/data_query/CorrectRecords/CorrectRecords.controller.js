class Controller {
    constructor(demoRequest, $state, $scope,$filter) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.$filter = $filter;
        this.demoRequest = demoRequest;
        this.num = "";
        this.selected = "500000001";
        this.start_date = '';
        this.end_date = '';
        this.table = {};
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
        let pramas = {
            acc_nbr: this.num,
            segment_id: this.selected,
            start_date:this.$filter('date')(this.start_date,'yyyyMMdd'),
            end_date :this.$filter('date')(this.end_date,'yyyyMMdd')
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
        if(!this.start_date || !this.end_date){
            return this.scp = {
                loading:false,
                msg:"请输入查询的日期",
                result:201
            }
        }
        this.demoRequest.CorrectRecords(pramas).then(data => {
            this.scp.loading = false;
            console.log(data);
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Washed-RecQuery-info"];
                this.scp.result = 0;
                this.scp.list = this.table.length;
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