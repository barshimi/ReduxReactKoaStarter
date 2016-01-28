import React           from 'react';
import { Provider }    from 'react-redux';
import { Router }      from 'react-router';
import { createHistory, useBasename } from 'history'
import routes          from '../routes';
import { ReduxRouter } from 'redux-router';
import DevTools        from './DevTools';


export default class Root extends React.Component {
  static propTypes = {
    store : React.PropTypes.object.isRequired,
    history : React.PropTypes.object.isRequired,
    debug : React.PropTypes.bool,
  }

  render () {
    return (
      <div>
        <Provider store={this.props.store}>
          <div>
            <ReduxRouter>
               <Router history={ this.props.history } children={ routes(this.props.store) } />
            </ReduxRouter>
            <DevTools />
          </div>
        </Provider>
      </div>
    );
  }
}

