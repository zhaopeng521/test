class Controller {
    constructor(demoRequest, $state, $scope) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.demoRequest = demoRequest;
        this.scp = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.num = "";//传入值
        this.year = new Date();
        this.month = new Date();
        this.pramas = {};
        this.table=[];
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
            acc_nbr: this.num,
            billing_cycle:(y+m)
        };
        console.log(this.pramas);
        this.scp.loading = true;
        if(!this.num){
            this.scp.loading = false;
            this.scp.result = 500;
            return this.scp.msg = "输入不能为空";
        };
        this.demoRequest.qxl_use(this.pramas).then(data => {
            console.log(data);
            this.scp.loading = false;
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Forward-Flowpool-Info"];
                
            } else {
                this.scp.result = 201;
                this.scp.msg = data["CCA"]["Para-Field-Result"];
                console.log('scp',this.scp);
            };

        }, error => {
            this.scp.loading = false;
            this.scp.result = 500;
            
        });
    }

}

export default Controller;