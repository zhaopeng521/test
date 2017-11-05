class Controller {
    constructor(demoRequest, $state, $scope) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.demoRequest = demoRequest;
        this.num = "";
        this.selected = "";
        this.pramas = {};
        this.table = {};
        // this.msg = "消息已成功发送，请稍等";
        this.scp = {
            loading :"",
            list : 0,
            result:'',
            msg:""
        };
    }

    submitTable() {
        this.pramas = {
            "distination_id": this.num,
            query_flag: this.selected
        };
        this.scp.msg = "";
        this.table=null;
        this.scp.loading = true;
        if(!this.num){
            return this.scp = {
                loading : false,
                msg : "请输入查询的号码",
                result : 201
            }
        }
        this.demoRequest.dwjl_seek(this.pramas).then(data => {
             this.scp.loading = false;
            console.log(data);
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Broken-Rec-info"];
                this.scp.result = 0;
                console.log(this.table.length);
                this.scp.list = this.table.length;
                console.log(this.scp,"000");

            } else {
                console.log("201",data["CCA"]["Service-Result-Code"])
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