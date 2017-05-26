require('./PageSetup.styl');
const { Grid, Group, Boxs } = SaltUI;
const classNames = require('classnames');
const reactMixin = require('react-mixin');
let HBox = Boxs.HBox;
let Box = Boxs.Box;

class Setup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <div>
                14
            </div>
        );
    }


    componentWillMount() {
       
    }

    componentDidMount() {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUnmount() {
    }
}

module.exports = Setup;
