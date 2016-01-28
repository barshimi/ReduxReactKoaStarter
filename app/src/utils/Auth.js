/**
 *  Auth util
 */
import { getLocalStorage, removeLocalStorage } from './index';
import { authActionsCreators } from './../actions/auth_actions';
import setInitialCoreLayout from './initialCore';
import moment from 'moment';



export default function (nextState, replaceState) {
    const nextPathname = nextState.location.pathname;
    const { dispatch, getState } = this.store;
    const user_status = getState().userLogged;

    const user = getState().fetchUserAuth;

    if(nextPathname == '/login' && user.userName.length > 0 && user.userId > 0) return replaceState({ nextPathname: nextPathname }, '/app/main');
    if(nextPathname == '/login') return;

    const token = getLocalStorage('token');
    var currTime = moment().unix(),
        session = token ? token.sessionTime : 0;

    if(currTime > session && nextPathname !== '/login') {
        dispatch(authActionsCreators.fetchUserAuth({}, false));
        dispatch(authActionsCreators.authenticatUser(false));
        removeLocalStorage('token');
        return replaceState({ nextPathname: nextPathname }, '/login');
    }


    if(!user.userName.length && nextPathname !== '/login') return replaceState({ nextPathname: nextPathname }, '/login');
    if(nextPathname.search("app") > 0)
        setInitialCoreLayout(nextState, replaceState, this.store);
}
