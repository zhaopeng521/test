class Controller {
    constructor(demoRequest, $state, $scope) {
        "ngInject";
        this.$state = $state;
        this.$scope = $scope;
        this.demoRequest = demoRequest;
        this.num = ""; //传入值
        this.selected2 = "";
        this.pramas = {};
        this.table = [];
        this.year = new Date();
        this.month = new Date();
        this.scp = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.init();
    }
    init(){
        this.scp = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.table = [];
    }
    submitTable() {
        this.init();
        var y = angular.element(document.getElementsByClassName('form-year'))[0].value;
        var m = angular.element(document.getElementsByClassName('form-month'))[0].value;
        this.pramas = {
            destination_id: this.num,
            query_flag: this.selected2,
            billing_cycle: (y + m)
        };
        this.scp.loading = true;
        if(!this.num){
            return this.scp = {
                loading : false,
                msg : "请输入查询的号码",
                result : 201
            }
        }
        this.demoRequest.tc_use(this.pramas).then(data => {
            console.log(data);
            this.scp.loading = false;
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Product-OFF-info"];
            } else {
                this.table = null;
                this.scp.result = 201;
                this.scp.msg = data["CCA"]["Para-Field-Result"];
                console.log('scp', this.scp);
            }
        }, error => {
            this.scp.result = 500;
            this.scp.loading = false;
        });
    }

}

export default Controller;