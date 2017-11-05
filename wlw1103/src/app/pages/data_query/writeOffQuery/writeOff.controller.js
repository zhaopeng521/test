class Controller {
    constructor(demoRequest, $state, $scope) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.demoRequest = demoRequest;
        // this.num = "";//销账查询号码
        this.num1 = '';//销账文件查询的号码
        this.year = new Date();
        this.month = new Date();
        // this.table = [];
        this.table1 = [];//销账文件查询返回的数据
        // this.msg = "消息已成功发送，请稍等";
        this.scp = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        this.scp1 = {
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
        this.scp1 = {
            loading: false,
            list: 0,
            result: '',
            msg: ""
        };
        this.table1 = [];
    }
    // submitTable() {
    //     this.init();
    //     let pramas = {
    //         acc_nbr: this.num,
    //         prov: '021',
    //         latn_id :0,
    //         billing_cycle:'201708',
    //         mvno_id:'500000001'
    //     };
    //     console.log(pramas);
    //     this.scp.loading = true;
    //     if (!this.num) {
    //         return this.scp = {
    //             loading: false,
    //             msg: "请输入查询的号码",
    //             result: 201
    //         }
    //     }
    //     this.demoRequest.WriteOff(pramas).then(data => {
    //         this.scp.loading = false;
    //         console.log(data);
    //         if (data["CCA"]["Service-Result-Code"] == 0) {
    //             this.table = data["CCA"]["Write-Off-Information"];
    //             this.scp.result = 0;
    //             console.log(this.table.length);
    //             this.scp.list = this.table.length;
    //             console.log(this.scp, "000");
    //         } else {
    //             // console.log(this.scp,"111");
    //             this.scp.result = 201;
    //             this.table = null;
    //             this.scp.msg = data["CCA"]["Para-Field-Result"];
    //         };

    //     }, error => {
    //         this.scp.result = 500;
    //         this.scp.loading = false;
    //     })
    // }
    submitTable1() {//销账文件查询方法
        this.init();
        var y = angular.element(document.getElementsByClassName('form-year'))[0].value;
        var m = angular.element(document.getElementsByClassName('form-month'))[0].value;
        let pramas = {
            acc_nbr: this.num1,
            billing_cycle:(y+m)
        };
        console.log(pramas);
        this.scp1.loading = true;
        if (!this.num1) {
            return this.scp1 = {
                loading: false,
                msg: "请输入查询的号码",
                result: 201
            }
        }
        this.demoRequest.WriteOffFile(pramas).then(data => {
            this.scp1.loading = false;
            console.log(data);
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table1 = data["CCA"]["Payment-Record-info"];
                this.scp1.result = 0;
                this.scp1.list = this.table1.length;
            } else {
                // console.log(this.scp,"111");
                this.scp1.result = 201;
                this.table1 = null;
                this.scp1.msg = data["CCA"]["Para-Field-Result"];
            };

        }, error => {
            this.scp1.result = 500;
            this.scp1.loading = false;
        })
    }

}

export default Controller;