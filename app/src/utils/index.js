import moment from 'moment';
import jwt from 'jwt-simple';
import { jwtPrefix } from './constants';


export function createConstants (...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];
    return reducer ? reducer(state, action.payload) : state;
  };
}

/**
 * sort Array of Objects by key
 * @param  {[type]} Arr [description]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
export function sortBy(Arr, key) {
   return Arr.sort(function(a,b) {
        return (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
    });
};

/**
 * set encrypt local storage key
 * @param {string} key   localStorage key
 * @param {object} value encrypt string object
 */
export function setLocalStorage(key, value) {
   localStorage.setItem(key, jwt.encode(value, jwtPrefix));
}

/**
 * get and decrypt local storage key
 * @param  {string} key localStorage key
 * @return {object}     decrypt object
 */
export function getLocalStorage(key) {
    if(localStorage.getItem(key) == undefined) return undefined;
    return jwt.decode(localStorage.getItem(key), jwtPrefix);
}

/**
 * remove local storage key
 * @param  {string} key localStorage key
 */
export function removeLocalStorage(key) {
    return localStorage.removeItem(key);
}

/**
 * set user authentication session
 * @param {object} user user details object
 */
export function setUserSession(Obj) {
    var time = moment().add(2, 'hours').unix();
    setLocalStorage("token", { sessionTime : time , userDetails : Obj.user , apps : Obj.apps, env : Obj.nodeEnv });
  return time;
}
/**
 * menu tree object
 * @type {object}
 */
export const MenuTree = [
                {
                title : "main" ,
                refName : "main",
                icon : "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMTAgMjBoNFY0aC00djE2em0tNiAwaDR2LThINHY4ek0xNiA5djExaDRWOWgtNHoiLz48L3N2Zz4=",
                url: "/app/main"
                },
                {
                  title : "about",
                  icon : 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBpZD0iYSIvPiAgICA8L2RlZnM+ICAgIDxjbGlwUGF0aCBpZD0iYiI+ICAgICAgICA8dXNlIG92ZXJmbG93PSJ2aXNpYmxlIiB4bGluazpocmVmPSIjYSIvPiAgICA8L2NsaXBQYXRoPiAgICA8cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGQ9Ik0yMyA4YzAgMS4xLS45IDItMiAyLS4xOCAwLS4zNS0uMDItLjUxLS4wN2wtMy41NiAzLjU1Yy4wNS4xNi4wNy4zNC4wNy41MiAwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJjMC0uMTguMDItLjM2LjA3LS41MmwtMi41NS0yLjU1Yy0uMTYuMDUtLjM0LjA3LS41Mi4wN3MtLjM2LS4wMi0uNTItLjA3bC00LjU1IDQuNTZjLjA1LjE2LjA3LjMzLjA3LjUxIDAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMmMuMTggMCAuMzUuMDIuNTEuMDdsNC41Ni00LjU1QzguMDIgOS4zNiA4IDkuMTggOCA5YzAtMS4xLjktMiAyLTJzMiAuOSAyIDJjMCAuMTgtLjAyLjM2LS4wNy41MmwyLjU1IDIuNTVjLjE2LS4wNS4zNC0uMDcuNTItLjA3cy4zNi4wMi41Mi4wN2wzLjU1LTMuNTZDMTkuMDIgOC4zNSAxOSA4LjE4IDE5IDhjMC0xLjEuOS0yIDItMnMyIC45IDIgMnoiLz48L3N2Zz4=',
                  refName : "about",
                  url: "/app/about"
                },
                {
                  title : "reddit",
                  icon : 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMyAxM2g4VjNIM3YxMHptMCA4aDh2LTZIM3Y2em0xMCAwaDhWMTFoLTh2MTB6bTAtMTh2Nmg4VjNoLTh6Ii8+PC9zdmc+',
                  refName : "reddit",
                  url: "/app/reddit"
                }
        ];


/**
 * set initial state of core layout
 * @return {object} updated initial state
 */
export function getInitialDetails() {
    const initialState = {
        MenuState : ''
    }

    const userDetails = getLocalStorage('token');


    var renderMenu = [],
        menuSelected = '/admin/main'.split("/");

    initialState.MenuTree = arrangeMenuTree(menuSelected);
    initialState.navTitle = menuSelected.length > 1 ? { main : menuSelected[0], sub : menuSelected[1] } : { main : menuSelected[0] };

  return initialState
}

export function arrangeMenuTree(menuSelected) {
     var renderMenu = [];
     MenuTree.forEach(function(tab, index){

        var cloneTab = Object.assign({}, tab);

        if(tab.title == menuSelected[0]){
            cloneTab.activeList = true;
            if(menuSelected.length > 1) {
                tab.childNodes.forEach(function(subTab, subIndex){
                    if(subTab.url.indexOf(menuSelected[1]) > -1) cloneTab.childNodes[subIndex].activeList = true;
                });
            }
        }
        renderMenu.push(cloneTab);
    });
  return renderMenu;
}


export function isFloat (n) { return n !== '' && !isNaN(n) && Math.round(n) !== n };

