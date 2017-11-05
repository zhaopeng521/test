import style from './tc-seek.css';
class Controller {
    constructor(demoRequest, $state, $scope,$sce) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.$sce = $sce;
        this.style = style;
        this.demoRequest = demoRequest;
        this.num = "";
        this.selected2 = "";
        this.pramas = {};
        this.pramas1 = {};//属性参数
        this.table = {};
        this.datail = {};
        this.h = "";
       this.htmlPopover = this.$sce.trustAsHtml(`<div>${this.h}</div>`);
        this.scp = {
            loading :"",
            list : 0,
            result:'',
            msg:""
        };
        this.scp1 = {
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
        this.pramas = {
            "destination_id": this.num,
            query_flag: this.selected2
        };
        this.scp.loading = true;
        if(!this.num){
            return this.scp = {
                loading : false,
                msg : "请输入查询的号码",
                result : 201
            }
        }
        this.demoRequest.tc_seek(this.pramas).then(data => {
            this.scp.loading = false;
            console.log(data);
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Data-Information"];
                this.scp.result = 0;
                console.log(this.table.length);
                this.scp.list = this.table.length;
                console.log(this.scp,"000");
            } else {
                this.scp.result = 201;
                this.table=null;
                this.scp.msg = data["CCA"]["Para-Field-Result"];
            };
        },error =>{
            this.scp.loading = false;
            this.scp.result = 500;
            
        });
    }
    seek(e) {
        var target = e.currentTarget; //获取对应目标元素
        var acc_nbr = target.children[1].innerHTML;
        var product_offer_instance_id = target.children[8].innerHTML;
        this.pramas1 = {
            acc_nbr : acc_nbr,
            product_offer_instance_id : product_offer_instance_id
        };
        console.log(this.pramas1);
        this.scp1.msg = "";
        this.scp1.loading = true;
        this.demoRequest.product_seek(this.pramas1).then(data => {
            this.scp1.loading = false
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.datail = data["CCA"]["Data-Information"];
            } else {
                this.scp1.result = 201;
                this.table=null;
                this.scp1.msg = data["CCA"]["Para-Field-Result"];
            };
        },error =>{
            this.scp1.result = 500;
            this.scp1.loading = false;
        });
    }
    open(e){
        var target = e.currentTarget;
        this.h = target.innerHTML;
       this.htmlPopover = this.$sce.trustAsHtml(`<div>${this.h}</div>`);
        console.log(this.h);
    }

}

export default Controller;