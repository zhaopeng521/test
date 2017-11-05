class Controller {
    constructor(demoRequest, $state, $scope) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.demoRequest = demoRequest;
        this.bl = false;
        this.num = "";//传入值
        this.selected2 = "";
        this.pramas = {};
        this.table = {};
        // this.msg = "消息已成功发送，请稍等";
        this.year = new Date();
        this.month = new Date();
        this.scp = {
            loading :"",
            list : 0,
            result:'',
            msg:""
        };
        this.init();
    }
    init(){
        this.scp={
            loading :"",
            list : 0,
            result:'',
            msg:""
        };
        this.table = null;
    }
    submitTable() {
        this.init();
        var y = angular.element(document.getElementsByClassName('form-year'))[0].value;
        var m = angular.element(document.getElementsByClassName('form-month'))[0].value;
        this.pramas = {
            "destination_id": this.num,
            query_flag: this.selected2,
            billing_cycle:(y+m)
        };
        this.scp.loading = true;
        if(!this.num){
            this.scp.loading = false;
            this.scp.result = 500;
            return this.scp.msg = "输入不能为空";
        };
        this.demoRequest.hxl_seek(this.pramas).then(data => {
            this.scp.loading = false;
            console.log("==============",data)
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Query-Recharge-info"];
                this.scp.result = 0;
                console.log(this.table.length);
                this.scp.list = this.table.length;
                console.log(this.scp,"000");
            } else {
                // this.bl = true;
                // this.msg = data["CCA"]["Para-Field-Result"];
                // console.log(this.msg);
                this.scp.result = 201;
                this.table=null;
                this.scp.msg = data["CCA"]["Para-Field-Result"];
            };
        },error =>{
            this.scp.result = 500;
            this.scp.loading = false;
        });
    }

}

export default Controller;