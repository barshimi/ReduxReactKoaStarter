/**
 *  auth actions
 */
import * as coreActions from './core_layout';
import jwt from 'jwt-simple';
import { jwtPrefix, ENV, user } from './../utils/constants';
import { APIgetCall, APIpostCall } from './../utils/api';
import { setUserSession, removeLocalStorage } from './../utils';

export const AUTH_USER_DETAILS = "AUTH_USER_DETAILS";
export const AUTH_USER_LOG_STATUS = "AUTH_USER_LOG_STATUS";
export const AUTH_USER_LOGOUT = "AUTH_USER_LOGOUT";

export const authActionsCreators = {
    authenticatUser : value => ({ type : AUTH_USER_LOG_STATUS, payload : value }),
    fetchUserAuth: (postParams, user_status) => dispatch => {
        if(!user_status) {
            var user = {
                userId : 0,
                userName : '',
                userEmail : '',
                userToken : 0
            }
            return dispatch({
                type: AUTH_USER_DETAILS,
                payload: user
            });

        }else{
            fetch(APIpostCall(ENV + "/admin/login", postParams))
            .then(res => {
                if(res.status == 302 || res.status == 500) return res.status;
                if(res.status == 401) {
                   removeLocalStorage('token');
                }
              return res.json();
            })
            .then(res => {
                let assignedUser = Object.assign({} , res, { user : jwt.decode(res.user, jwtPrefix) });
                if(typeof assignedUser == "string") return res;

                assignedUser.user.userToken = setUserSession(assignedUser);
                return dispatch({
                    type: AUTH_USER_DETAILS,
                    payload: assignedUser.user
                });
            })
            .catch(err => {
                console.log(err);
            })
        }

    },
    logoutUser : () => dispatch => {
        fetch(APIgetCall(ENV + "/admin/logout"))
        .then(res => {
           removeLocalStorage('token');
           dispatch({
              type : AUTH_USER_LOGOUT,
              payload : true
           })
        })
        .catch(err => {
            console.log(err);
        })
    }
}


