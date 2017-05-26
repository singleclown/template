import Actions from './actions';
import DB from '../../app/db';

module.exports = Reflux.createStore({
    listenables: [Actions],
    data: {
        loaded: false
    },

     onFetch: function(params, cb) {
        let t = this;
        DB.SomeModuleAPI.getSomeInfo(params)
        .then(function(content) {
            const { list } = content;
            t.trigger( { list } );
            cb && cb(t.data);
        })
        .catch(function( error ) {
            t.trigger({ error })
            cb && cb(t.data);
        });
    },

    getInitialState: function() {
        return { 
            list:[],
        };
    }
});
