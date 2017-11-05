class DemoRequestService {
    constructor(QueryHelperService) {
        'ngInject';

        this._QueryHelper = QueryHelperService;
    };

    demoLogin(params) {
        return this._QueryHelper.post('/login', params);
    }

    demoLogout(params) {
        return this._QueryHelper.post('/logout', params);
    }
    testServices(params) {//用户短信查询
        return this._QueryHelper.post('/services/message/MessageRemindQuery', params);
    }
    query_seek(params) {//用户资料查询查询
        return this._QueryHelper.post('/services/serv/QueryInfo', params);
    }
    qx_cy(params) {//前向流量池成员
        return this._QueryHelper.post('/services/flowpool/QueryForwardFlowpool', params);
    }
    hx_cy(params) {//后向流量池成员
        return this._QueryHelper.post('/services/flowpool/QueryBackwardFlowpool', params);
    }
    queryProductInfo(params) {//3、用户附属产品
        return this._QueryHelper.post('/services/serv/QueryProductInfo', params);
    }
    goAttrInfo(params) {//用户附属产品属性
        return this._QueryHelper.post('/services/serv/QueryProductAttrInfo', params);
    }
    queryServAttr(params) {//4、用户属性
        return this._QueryHelper.post('/services/serv/QueryServAttr', params);
    }
    goMergeNbr(params) {//用户附属产品属性
        return this._QueryHelper.post('/services/serv/QueryMergeNbr', params);
    }
    hxl_seek(params) {
        return this._QueryHelper.post('/services/charge/QueryRecharge', params);
    }
    tc_use(params) {
        return this._QueryHelper.post('/services/quantity/QueryRatableResource', params);
    }
    tc_seek(params) {
        return this._QueryHelper.post('/services/serv/QueryProdOffr', params);
    }
    dwjl_seek(params) {
        return this._QueryHelper.post('/services/message/NetworkBrokenRecQuery', params);
    }
    hxl_use(params) {
        return this._QueryHelper.post('/services/flowpool/QueryBackwardInfo', params);
    }
    qxl_use(params) {
        return this._QueryHelper.post('/services/flowpool/QueryForwordInfo', params);
    }
    hz_seek(params) {
        return this._QueryHelper.post('/services/charge/CombineAccountQuery', params);
    }
    device_seek(params) {
        return this._QueryHelper.post('/services/charge/DeviceNumQuery', params);
    }
    bg_seek(params) {
        return this._QueryHelper.post('/services/serv/QueryBaseInfo', params);
    }
    product_seek(params) {
        return this._QueryHelper.post('/services/serv/QueryProdAttr', params);
    }
    payment(params) {//充值记录查询
        return this._QueryHelper.post('/services/payment/PaymentRecQuery', params);
    }
    Account_adjust(params) {//调账查询
        return this._QueryHelper.post('/services/charge/AdjustRecQuery', params);
    }
    TransferInquiry(params) {//过户查询
        return this._QueryHelper.post('/services/charge/TransferRecQuery', params);
    }
    WriteOff(params) {//销账查询
        return this._QueryHelper.post('/services/bill/QueryWriteOff', params);
    }
    WriteOffFile(params) {//销账文件查询
        return this._QueryHelper.post('/services/bill/QueryWriteOffFile', params);
    }
    CorrectRecords(params) {//冲正查询
        return this._QueryHelper.post('/services/charge/WashedRecQuery', params);
    }
    Billingfile(params) {//账单文件查询
        return this._QueryHelper.post('/services/charge/BillFileRecQuery', params);
    }
    QueryBalance(params) {//余额查询
        return this._QueryHelper.post('/services/balance/QueryBalance', params);
    }
    ArrearsQuery(params) {//欠费查询
        return this._QueryHelper.post('/services/bill/BillQuery', params);
    }
    BalanceChange(params) {//余额变动明细查询
        return this._QueryHelper.post('/services/balance/BalanceChangeDetailQuery', params);
    }
};

export default DemoRequestService;