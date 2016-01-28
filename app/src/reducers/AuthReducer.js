/**
 *  Auth Reducer
 */
import { createReducer, getLocalStorage } from 'utils';
import {
   AUTH_USER_DETAILS,
   AUTH_USER_LOG_STATUS,
   AUTH_USER_LOGOUT
} from './../actions/auth_actions';

const InitialState = {
    UserLogged : false,
    UserLogout : false,
    User : {
        userId : 0,
        userName : '',
        userEmail : '',
        userToken : 0,
        userState : ''
    }
}

const userDetails = getLocalStorage('token');
if(userDetails) InitialState.User = userDetails.userDetails;

export const fetchUserAuth = createReducer(InitialState.User, {
    [AUTH_USER_DETAILS] : (state, action) => action
});

export const userLogged = createReducer(InitialState.UserLogged, {
    [AUTH_USER_LOG_STATUS] : (state) => state
});

export const userLogout = createReducer(InitialState.UserLogout, {
    [AUTH_USER_LOGOUT] : (state) => state
});

