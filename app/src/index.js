import React          from 'react';
import ReactDOM       from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Root           from './containers/Root';
import configureStore from './stores/configureStore';

const target = document.getElementById('root');
const history = createBrowserHistory()
const store  = configureStore(window.__INITIAL_STATE__, __DEBUG__);


const node = (
  <Root store={store}
        history={history}
        debug={__DEBUG__}
        debugExternal={__DEBUG_NW__}/>
);

ReactDOM.render(node, target);

