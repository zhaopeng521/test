class Controller {
    constructor(demoRequest, $state, $scope) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.demoRequest = demoRequest;
        this.num = "";//传入值
        this.selected2 = "";
        this.pramas = {};
        this.group = {}
        this.table = {};
        this.scp = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.year = new Date();
        this.month = new Date();

        this.init();
    }
    init() {
        this.scp = {
            loading: false,
            list: 0,
            result: '',
            msg: "",
        };
        this.table = null;
    }

    submitTable() {
        this.init();
        var y = angular.element(document.getElementsByClassName('form-year'))[0].value;
        var m = angular.element(document.getElementsByClassName('form-month'))[0].value;
        this.pramas = {
            acc_nbr: this.num,
            query_flag: this.selected2,
            billing_cycle: (y + m)
        };
        console.log(this.pramas);
        this.group = {};
        this.scp.loading = true;
        if (!this.num) {
            this.scp.loading = false;
            this.scp.result = 500;
            this.table = null;
            return this.scp.msg = "输入不能为空";
        };
        console.log(this.pramas);
        this.demoRequest.hxl_use(this.pramas).then(data => {
            this.scp.loading = false;
            console.log(data);
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.group = data["CCA"]["Pool-Group"];
                this.table = this.group["Pool-Group-Detail"];
            } else {
                this.scp.result = 201;
                // this.table = null;
                this.scp.msg = data["CCA"]["Para-Field-Result"];
            };
        }, error => {
            this.scp.result = 500;
            this.scp.loading = false;

        });
    }

}

export default Controller;