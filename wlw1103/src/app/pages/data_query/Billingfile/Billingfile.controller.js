class Controller {
    constructor(demoRequest, $state, $scope) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.demoRequest = demoRequest;
        this.num = "";
        this.selected = "";
        this.table = [];
        this.tr_data = [];
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
    init() {
        this.scp = {
            loading: false,
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
        // this.num = '07927224906';
        // this.selected = '1';
        // console.log("shuju",(y+"")+(m+""))
        const pramas = {
            nbr: this.num,
            server_type: this.selected,
            month:(y+"")+(m+"")
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
        this.demoRequest.Billingfile(pramas).then(data => {
            this.scp.loading = false;
            console.log(data);
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Bill-File-RecQuery-info"];
                // angular.forEach(this.table,function(data){
                //     this.tr_data.push(data["acct_Item_type_name"]);
                // })
                this.scp.result = 0;
               this.scp.list = this.table.length;
            } else {
                console.log(this.scp,"111");
                this.scp.result = 201;
                this.table = [];
                this.scp.msg = data["CCA"]["Para-Field-Result"];
            };

        }, error => {
            this.scp.result = 500;
            this.scp.loading = false;
        })
    }

}

export default Controller;