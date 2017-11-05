class Controller {
    constructor(demoRequest, $state, $scope) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.demoRequest = demoRequest;
        this.bl = false;
        this.num = "";//传入值
        this.attr ="15";
        this.pramas = {};
        this.msg = "消息已成功发送，请稍等";
        this.table = [];
    }

    closeAlert() {
        this.bl = false;
    }
    submitTable() {
        console.log(this.attr);
        this.pramas = {
            acc_nbr : this.num,
            attr_id:this.attr
        };
        this.bl = true;
        console.log("-------------",this.pramas);
        this.demoRequest.device_seek(this.pramas).then(data => {
            this.bl = false;
            console.log("==============",data)
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["device-num-info"];
                
                
            } else {
                this.bl = true;
                this.msg = "没有输入指定的参数，无数据返回";
                console.log(this.msg);
            };

        });
    }

}

export default Controller;