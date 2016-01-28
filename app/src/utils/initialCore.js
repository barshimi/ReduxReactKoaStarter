/**
 *  initial core layout
 */
import rootReducer, { registerNewReducers } from './../reducers';

export default function setInitialCoreLayout (nextState, replaceState, store) {

     const CoreReducer = require('./../reducers/coreLayout');
     const RedditReducer = require('./../reducers/RedditReducer');

     const { dispatch, getState, replaceReducer } = store;

     const {
        navTitle,
        menuTree,
        userDetails,
        menuState,
        getAppHost
     } = CoreReducer;

     const {
        RedditList
     } = RedditReducer;

     const newReducersObj = {
        navTitle : navTitle,
        menuTree : menuTree,
        userDetails : userDetails,
        menuState : menuState,
        getAppHost : getAppHost,
        RedditList : RedditList
     };

     registerNewReducers(newReducersObj);
     replaceReducer(rootReducer());
}



