require('./PageOverview.styl');
const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');
//构造函数
class Overview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }

    render() {
        return (
            <div className="overview">
                13
            </div>);
    }


    componentWillMount() {

    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

reactMixin.onClass(Overview, Reflux.connect(Store, 'Overview'));

module.exports = Overview;
