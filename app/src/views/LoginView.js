/**
 *  Login View
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActionsCreators } from './../actions/auth_actions';
import { pushState } from 'redux-router';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';

import './../styles/login.scss';

export default class LoginView extends React.Component {
    static propTypes = {
        actions  : React.PropTypes.object
    }

    constructor (props) {
        super(props);

        this.submitLogin = this.submitLogin.bind(this);
    }

    submitLogin(event) {
        if(event.type == "keyup" && event.keyCode !== 13) return;
        var userName = ReactDOM.findDOMNode(this.refs.userName).value,
            userPass = ReactDOM.findDOMNode(this.refs.userPassword).value;

        if(!userName.length || !userPass.length) return;

        this.props.actions.fetchUserAuth({ username : userName, password : userPass }, true);
        this.props.actions.authenticatUser(true);

        ReactDOM.findDOMNode(this.refs.userName).value = '';
        ReactDOM.findDOMNode(this.refs.userPassword).value = '';
    }

    componentWillReceiveProps (nextProps) {
        if(!shallowEqual(nextProps, this.props)){
            nextProps.history.push('/app/main');
        }

    }

    componentWillMount () {
        // console.log(this.props);
    }

    render() {
        return (
           <div className="loginWrapper">
                <div className='loginBox'>
                    <h1 className='loginTitle'>login page</h1>
                    <h4 className='loginSubTitle'>welcome. login</h4>
                    <div className="submitForm">
                        <span className="inputBox">
                            <input type="text"
                                   className='loginInput form_user'
                                   placeholder='user name'
                                   ref='userName'/>
                        <span className="asterisk">*</span>
                        </span>
                        <span className="inputBox">
                            <input type="password"
                                   className='loginInput form_pass'
                                   placeholder='password'
                                   ref='userPassword'
                                   onKeyUp={ this.submitLogin }/>
                        <span className="asterisk">*</span>
                        </span>
                        <button className='submitLogin' onClick={ this.submitLogin }>login to your account</button>
                    </div>
                </div>
           </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fetchUserAuth : state.fetchUserAuth,
    failAuth : state.failAuth,
    userSession : state.userSession,
    nodeEnv : state.nodeEnv
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(authActionsCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
