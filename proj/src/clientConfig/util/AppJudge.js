
import { GetQueryString } from 'clientConfig/util/queryurlfield';
import { getDomRouter } from 'clientConfig/util/Page_router';
const { Router, Route, IndexRoute, Link, hashHistory } = ReactRouter;
const DingClient = require('clientConfig/util/DingClient');
const net = require('clientConfig/util/net');
const urllist = require('clientConfig/urllist');
let corpid = GetQueryString("corpid");
let appid = GetQueryString("appid");
let apptype = GetQueryString("apptype");
let devtype = GetQueryString("devtype");
let start = Symbol('fnstart');
function bar() {
    this[start]();
}
class Appjudge {
    /*
     *signUrl:签名的url
     *corpid：授权企业id
     *appid：授权应用id
     *apptype:应用类型0微应用1服务窗应用
     *devtype:1手机2pc
    */
    static init() {
        var t = this;
        let url = location.href.split('#', 1);
        let signUrl = encodeURIComponent(url);
        if (apptype == 0 && devtype == 1) {
            //手机微应用
            var urlprefix = urllist.getjsapi;
        } else if (apptype == 0 && devtype == 2) {
            //pc微应用
            var urlprefix = urllist.getjsapi;
        } else if (apptype == 1 && devtype == 1) {
            //手机服务窗
            var urlprefix = urllist.getchanneljsapi;
        }
        if (corpid && appid) {
            //jsapi验证
            net.fetchUrl(urlprefix + "?corpid=" + corpid + '&appid=' + appid + '&url=' + signUrl).then((jsondata) => {
                let agentId = jsondata.agentid;
                if (jsondata.url == url) {
                    /**获取免登码*/
                    DingClient.clientConfig(jsondata, apptype, devtype, function (isSuccessed, data) {
                        if (isSuccessed) {
                            //微应用
                            apptype == 0 && devtype == 1 && dd.runtime.permission.requestAuthCode({
                                corpId: corpid,
                                onSuccess: function (result) {
                                    //1.code获取微应用关注者信息
                                    t.loginmicro(result.code, corpid);
                                },
                                onFail: function (err) { alert(err) }
                            });
                            //服务窗
                            apptype == 1 && devtype == 1 && dd.channel.permission.requestAuthCode({
                                corpId: corpid,
                                onSuccess: function (result) {
                                    //1.免登获取openid 2.code获取服务窗关注者信息
                                    t.getopenid(jsondata.corpid, result.code).then((jsondata) => {
                                        t.loginservice(jsondata, corpid);
                                    });
                                },
                                onFail: function (err) { alert(err) }
                            });
                        } else {
                            alert(JSON.stringify(data));
                        }
                    });
                } else {
                    alert('签名的url不一致');
                }
            });
        } else {
            alert('获取corpid失败，免登出错');
        }
    }
    //微应用获取用户信息
    static loginmicro(code, corpid) {
        net.fetchUrl(urllist.getuserinfo + "?code=" + code + '&corpid=' + corpid).then((jsondata) => {
            if (jsondata.errcode == 0) {
                bar.call(this);
            } else {
                alert('获取用户信息失败');
                return;
            }
        });
    }
    //服务窗才有的流程
    getopenid(corpid, code) {
        //手机服务窗
        var urlprefix = urllist.getuserchannelcode;
        net.fetchUrl(urlprefix + "?corpid=" + corpid + '&code=' + code).then((jsondata) => {
            if (jsondata.errcode == 0) {
                Storage.set('user.unionid', jsondata.unionid);
                Storage.set('user.openid', jsondata.openid);
                return jsondata;
            }
        });
    }
    //服务窗获取用户信息
    loginservice(jsonresult, corpid) {
        let unionid = jsonresult.unionid;
        let openid = jsonresult.openid;
        net.fetchUrl(urllist.bindtel + "?unionid=" + unionid).then((jsondata) => {
            if (jsondata.errcode == 1) {
                telbindstate = false;//1为未绑定
                // alert("用户未绑定手机号");
            }
            telbindstate = false;
            alert("openid=" + openid);
        });
        net.fetchUrl(urllist.getchanneluserinfo + "?openid=" + openid + '&corpid=' + corpid).then((jsondata) => {
            alert('jsondata1=' + JSON.stringify(jsondata1));
            if (jsondata1.errcode == 0) {
                alert('登录成功');
                jsondata1.nickname && Storage.set('user.nickname', jsondata1.nickname);
                jsondata1.avatar && Storage.set('user.avatar', jsondata1.avatar);
                Storage.set('user.subscribe', jsondata1.subscribe);
                jsapiJudge = true;
                let agentId = Storage.get('user.agentid');
                // this[start](agentId);
            }
        });
    }
    static [start]() {
        alert('登陆成功');
        getDomRouter();
    }
}

module.exports = Appjudge;