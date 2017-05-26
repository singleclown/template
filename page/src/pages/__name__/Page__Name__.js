require('./Page<%- Name %>.styl');
<% if (store) { %>
import reactMixin from 'react-mixin';
import Actions from './actions';
import Store  from './store';

const {  } = SaltUI;

// import {} from '../../components/modName';
<% } %>
class <%- Name %> extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="<%= name %>">
                page <%= name %>
            </div>
        );
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
<% if (store) { %>
reactMixin.onClass(<%- Name %>, Reflux.connect(Store));
<% } %>
module.exports = <%- Name %>;
