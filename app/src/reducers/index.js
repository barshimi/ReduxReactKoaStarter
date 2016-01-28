import { combineReducers }    from 'redux';
import { routerStateReducer } from 'redux-router';
import * as AuthReducer        from './AuthReducer';

const {
    fetchUserAuth,
    userLogged,
    userLogout
} = AuthReducer;

let asyncReducers = {};

export function registerNewReducers(newReducerObj) {
    asyncReducers = Object.assign(asyncReducers, newReducerObj);
}

export default function rootReducer () {
    const initialReducers = {
        fetchUserAuth : fetchUserAuth,
        userLogged : userLogged,
        userLogout : userLogout,
        router: routerStateReducer
    }
    var reducersObj = Object.assign(initialReducers, asyncReducers);
    return combineReducers(reducersObj);
}

