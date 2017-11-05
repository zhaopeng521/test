const menu = {
    tree: null,
    loading: false,
    collapsed: false
}

const data = {
    "resultCode": "1000",
    "resultMsg": "success",
    "data": {
        "records": [{
            "name": "首页",
            "icon": "home"
        }, {
            "name": "资料查询",
            "icon": "file-text-o",
            "expanded": true,
            "children": [{
                "link": "#/userPreference",
                "name": "用户资料查询",
                "icon": "caret-right"
            }, {
                "link": "#/writeoff",
                "name": "合帐号码查询",
                "icon": "caret-right"
            }, {
                "link": "#/message",
                "name": "用户短信提醒记录查询",
                "icon": "caret-right"
            }, {
                "link": "#/bgseek",
                "name": "用户资料变更查询",
                "icon": "caret-right"
            }, {
                "link": "#/tc_seek",
                "name": "用户套餐查询",
                "icon": "caret-right"
            }, {
                "link": "#/hlc_seek",
                "name": "后向流量池续充记录查询",
                "icon": "caret-right"
            }, {
                "link": "#/dwjl_seek",
                "name": "用户断网记录查询",
                "icon": "caret-right"
            }, {
                "link": "#/tc_use",
                "name": "用户套餐使用量查询",
                "icon": "caret-right"
            }, {
                "link": "#/qxllc_use",
                "name": "前向流量池使用量查询",
                "icon": "caret-right"
            }, {
                "link": "#/hxllc_use",
                "name": "后向流量池使用量查询",
                "icon": "caret-right"
            }]
        },{
            "name": "业务详单查询",
            "icon": "bar-chart",
            "children": [{
                "link": "#/echarge",
                "name": "充值记录查询",
                "icon": "caret-right"
            }, {
                "link": "#/work/writeOff",
                "name": "销账文件查询",
                "icon": "caret-right"
            }, {
                "link": "#/ArrearsQuery",
                "name": "欠费查询",
                "icon": "caret-right"
            }, {
                "link": "#/TransferInquiry",
                "name": "过户查询",
                "icon": "caret-right"
            }, {
                "link": "#/Billingfile",
                "name": "账单文件查询",
                "icon": "caret-right"
            }, {
                "link": "#/CorrectRecords",
                "name": "冲正记录查询",
                "icon": "caret-right"
            }, {
                "link": "#/Account_adjust",
                "name": "调账查询",
                "icon": "caret-right"
            }, {
                "link": "#/Balance",
                "name": "余额查询",
                "icon": "caret-right"
            }, {
                "link": "#/balance",
                "name": "余额变动明细查询",
                "icon": "caret-right"
            }]
        }]
        // {
        //     "link": "#/dataWork",
        //     "name": "数据业务详单查询",
        //     "icon": "caret-right"
        // }, {
        //     "link": "#/msgWork",
        //     "name": "短信业务详单查询",
        //     "icon": "caret-right"
        // }, {
        //     "link": "#/voiceWork",
        //     "name": "语音业务详单查询",
        //     "icon": "caret-right"
        // }, {
        //     "link": "#/upWork",
        //     "name": "增值业务详单查询",
        //     "icon": "caret-right"
        // }, {
        //     "link": "#/bill_seek",
        //     "name": "账单查询",
        //     "icon": "caret-right"
        // }, {
        //     "link": "#/dataPath",
        //     "name": "资料轨迹查询",
        //     "icon": "caret-right"
        // }, {
        //     "link": "#/Balance",
        //     "name": "余额查询",
        //     "icon": "caret-right"
        // },
        // {
        //     "link": "#/balance",
        //     "name": "余额变动明细查询",
        //     "icon": "caret-right"
        // },
        // {ArrearsQuery
        //     "name": "监控告警",
        //     "icon": "bar-chart",
        //     "children": [{
        //         "link": "#/monitor/watcher",
        //         "name": "监控指标",
        //         "icon": "caret-right"
        //     }, {
        //         "link": "#/monitor/display",
        //         "name": "监控展示",
        //         "icon": "caret-right"
        //     }, {
        //         "link": "#/monitor/query",
        //         "name": "告警查询",
        //         "icon": "caret-right"
        //     }]
        // }]
        //  , {
        //     "name": "系统管理",
        //     "icon": "cogs",
        //     "children": [{
        //         "link": "#/system/host",
        //         "name": "主机管理",
        //         "icon": "caret-right"
        //     },{
        //         "link": "#/system/component",
        //         "name": "组件配置",
        //         "icon": "caret-right"
        //     }]
        // }]
    }
}

export {
    menu,
    data
}