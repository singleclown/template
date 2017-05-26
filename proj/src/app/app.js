require('./app.styl');
import 'whatwg-fetch';
if (__LOCAL__ && window.chrome && window.chrome.webstore) {
    setInterval(function () {
        document.body.focus();
    }, 200);
}
import {getDomRouter} from 'clientConfig/util/Page_router';
window.FastClick && FastClick.attach(document.body);
const { Router, Route, IndexRoute,Link, hashHistory } = ReactRouter;
const Appjudge = require('clientConfig/util/AppJudge');
let jsapiJudge = false;
if (!__LOCAL__) {
    getDomRouter();
} else {
    Appjudge.init();
}



