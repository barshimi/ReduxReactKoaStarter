/**
 *  core layout actions
 */

// API actions
export const FETCH_MENU_STRUCTURE = 'FETCH_MENU_STRUCTURE';

// UI actions
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const NAV_TITLE = 'NAV_TITLE';


export const actionCreators = {
    toggleMenu: value => ({ type : TOGGLE_MENU, payload : value }),
    setNavTitle: value => ({ type : NAV_TITLE, payload : value }),
    configureMenu: value => ({ type : FETCH_MENU_STRUCTURE, payload : value })
}

