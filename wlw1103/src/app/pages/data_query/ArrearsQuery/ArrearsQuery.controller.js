class Controller {
    constructor(demoRequest, $state, $scope) {
        "ngInject";

        this.$state = $state;
        this.$scope = $scope;
        this.demoRequest = demoRequest;
        this.num = "";
        this.selected = "2";
        this.selected1 = "0";
        this.pramas = {};
        this.selectedTable = [];
        // this.msg = "消息已成功发送，请稍等";
        this.scp = {
            loading: "",
            list: 0,
            result: '',
            msg: ""
        };
        // this.keyMapping = {
        //     title: 'billing_cycle_id',
        // };
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
        this.a_data = [];
    }
    submitTable() {
        this.init();
        // this.num = '1064956486993';
        let pramas = {
            destination_account: this.num,
            mvno_id:"500000001",
            billQuery_type:this.selected,
            query_flag:this.selected1
        };
        console.log("shuju..........",pramas)
        this.scp.loading = true;
        if (!this.num) {
            return this.scp = {
                loading: false,
                msg: "请输入查询的号码",
                result: 201
            }
        }
        this.demoRequest.ArrearsQuery(pramas).then(data => {
            this.scp.loading = false;
            if (data["CCA"]["Service-Result-Code"] == 0) {
                this.table = data["CCA"]["Bill-Query-Information"]?data["CCA"]["Bill-Query-Information"]:[];
                console.log(this.table);
                this.a_data = data["CCA"]["Bill-Query-Information"]["Fee-Billing-Cycle"]?data["CCA"]["Bill-Query-Information"]["Fee-Billing-Cycle"]:[]; 
                // angular.forEach(this.a_data,function(data){
                //     let acct_item = data['Acct-Item-Group'][0]['Acct-Item-Type'];
                //     let billing_cycle_id = data['billing_cycle_id'];
                //     angular.forEach(acct_item,function(data){
                //         data['billing_cycle_id'] = billing_cycle_id;
                //     })
                // });
                angular.forEach(this.a_data,function(data){
                    let acct_item = data['Acct-Item-Group'][0]['Acct-Item-Type'];
                    let total = 0;
                    angular.forEach(acct_item,function(data){
                        total += Number(data['acct_item_charge']);
                    });
                    data['Acct-Item-Group'][0].total = total; 
                });
                console.log(this.a_data);
            } else {
                this.scp.result = 201;
                this.table = null;
                this.scp.msg = data["CCA"]["Para-Field-Result"];
            };

        }, error => {
            this.scp.result = 500;
            this.scp.loading = false;
        })
    }

    // onCheck(node) {//勾选树的方法
    //     console.log("node: ", node);
    //     let nodeData = node['Acct-Item-Group'][0]['Acct-Item-Type'];
    //     console.log("nodeData :",nodeData);
    //     let newDate = [];
    //     let selectedTable = angular.copy(this.selectedTable);
    //     if(node.checked) {
    //         this.selectedTable = angular.copy(this.selectedTable.concat(nodeData));  
    //     } else {
    //         // for(let i =0;i<selectedTable.length;i++){
    //         //     let hasOne = _.find(nodeData, item => {
    //         //         return item['billing_cycle_id'] == selectedTable[i]['billing_cycle_id'];
    //         //     })
    //         //     if(!hasOne) {
    //         //         newDate.push(selectedTable[i]);
    //         //     }
    //         let billing_cycle_id = nodeData['0']["billing_cycle_id"];
    //         for(var i = 0;i<selectedTable.length;i++){
    //             console.log(selectedTable[i][billing_cycle_id])
    //                 if( this.selectedTable[i]["billing_cycle_id"] != billing_cycle_id){
    //                     newDate.push(this.selectedTable[i]);
    //                 }
    //         }
    //         this.selectedTable = newDate;
    //     }       
    // }

}

export default Controller;