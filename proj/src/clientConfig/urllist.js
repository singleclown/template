const urllist = {
    getverifycode: '/cmb/send_verifycode',//获取短信POST tel
    checkverifycode: '/cmb/bind_tel',//校验手机POST tel code unionid
    bindtel: '/cmb/has_bind_tel',//查询手机绑定POST unionid
    getjsapi: '/cmb/get_jsapi',//获取免登签名信息GET corpid appid url
    getuserinfo: '/cmb/get_userinfo',//ISV获取用户信息GET code
    getchanneljsapi: '/cmb/get_channel_jsapi',//获取服务窗免登签名信息GET corpid appid url
    getuserchannelcode: '/cmb/get_user_channel_code',//获取服务窗用户ID GET code corpid
    getchanneluserinfo: '/cmb/get_channel_userinfo',//获取服务窗用户信息 GET  code
    getweatherquality:'http://jisutianqi.market.alicloudapi.com/weather/query?city=',//心知天气质量
    gettaxipolymerize: '/cmb/taxi_polymerize_list',//获取出租车聚合
    getairportdata: '/cmb/airport_status_list',//获取机场动态数据
    gettlkldata: '/cmb/tlkl_station_top',//火车站全省数据
    getkyzdata: '/cmb/kyz_data',//汽车所有数据
    gettotallyyw: '/cmb/lkyw_online_total',//两客一危在线总数
    getlkywlist: '/cmb/lkyw_polymerize_list',//两客一危聚合查询
    getflyflow: '/cmb/airport_db',//飞机当日客流量
    getgsdrll: "/cmb/gskk_stats_data",//获取高速当日流量
    getgskk: "/cmb/gsll_stats_more",//获取高速卡口数据
    gettlkll: "/cmb/tlkl_sxk",//获取铁路客流量上下客数
    getcllsfz: "/cmb/drgsll_sspm",//获取当日车流量排名前10收费站config2
    getzjllqs: "/cmb/zjqr_gsll_data",//获取最近7日流量趋势图config3
    gsssllqs: "/cmb/gskk_llqs_data",//获取高速实时流量趋势
    getdrzrlldb: "/cmb/gsll_db",
    getzxcltj: "/cmb/lkyw_online_total",//获取在线车辆统计
    gettlczdt: "/cmb/tlkl_station_top",//获取客流量排名前10火车站
    gettlkyzjr: "/cmb/tlkl_last_7days",//获取铁路客运最近客流趋势
    gethzdlkyll: "/cmb/kyz_data",//杭州道路客运流量
    gettlkldrzrdb: "/cmb/tlkl_db",//铁路客流当日昨日对比
    gettlwlsexs: "/cmb/tlkl_next_12hours",//铁路未来12小时
    gettlwlqrkllqs: "/cmb/tlkl_next_7days",//铁路未来7日
    getjcdt: "/cmb/airport_status_list",//获取机场动态
    getjczjqrkll: " /cmb/airport_last_7days",//获取机场最近7日客流量趋势图
    getgsqydrll: "/cmb/gsxx_data",//获取高速区域当日流量
    getaircraftlist: "/cmb/aircraft_list",//获取飞机动态
    getgslljjrdb: "/cmb/gsll_db_jjr",//获取高速流量节假日对比
    gettlkyjjrdb: "/cmb/tlkl_db_jjr",//获取铁路客运节假日对比
    getmhkyjzdb: "/cmb/airport_db",//获取民航客运今昨对比
    getmhkyjjrdb: "/cmb/airport_db_jjr",//获取民航客运节假日对比
    getwaterlist:'/cmb/ais_polymerize_list'//船舶聚合查询
}
export default urllist;
