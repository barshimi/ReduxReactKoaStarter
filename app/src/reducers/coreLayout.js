/**
 *  core Layout reducer
 */
import { createReducer, getInitialDetails } from 'utils';
import {
    TOGGLE_MENU ,
    FETCH_MENU_STRUCTURE,
    NAV_TITLE
} from './../actions/core_layout';

var initialState = getInitialDetails();

export const menuState = createReducer(initialState.MenuState, {
    [TOGGLE_MENU] : (state) => ( state.length > 0 ? '' : " active" )
});

export const menuTree = createReducer(initialState.MenuTree, {
    [FETCH_MENU_STRUCTURE] : (state) => state
});

export const navTitle = createReducer(initialState.navTitle, {
    [NAV_TITLE] : (state, navTitleObj) => {
        return navTitleObj;
    }
});

