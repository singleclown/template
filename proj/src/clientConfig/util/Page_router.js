const PageDetail = require('pages/detail');
const PageSetup = require('pages/setup');
const PageOverview = require('pages/overview');
let APPContent = require('clientConfig/util/App');
const { Router, Route, IndexRoute, Link, hashHistory } = ReactRouter;
export function getDomRouter() {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route name="app" path="/" component={APPContent}>
                <IndexRoute component={PageDetail} />
                <Route path='overview' component={PageOverview} />
                <Route path='detail' component={PageDetail} />
                <Route path='setup' component={PageSetup} />
            </Route>
        </Router>,
        document.getElementById('App')
    );
}
