require('./PageDetail.styl');
const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (<div>12</div>);
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

reactMixin.onClass(Detail, Reflux.connect(Store, 'Detail'));

module.exports = Detail;
